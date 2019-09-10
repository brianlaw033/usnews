import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import get from 'lodash/get'
import throttle from 'lodash/throttle'

import ArticleCard from '../components/ArticleCard'
import { isElementNotSeen, chunk } from '../utils'

const noPerPage = 10

const NewsContainer = styled.div`
  margin-top: 50px;
  padding: 10px 0;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1350px) {
    padding: 10px 0;
  }
`

export default ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pagedArticles = chunk(articles, noPerPage)
  const isFetching = useSelector(state => state.news.isFetching)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleScroll = throttle(
    () => {
      const nextPageElement = document.querySelector(`.page${currentPage + 1}`)
      if (nextPageElement && isElementNotSeen(nextPageElement)) {
        setCurrentPage(currentPage + 1)
      }
    }, 500
  )

  const renderArticleCards = () => {
    return Array.from(Array(currentPage + 1).keys()).map(page => {
      if (get(pagedArticles, `[${page}].length`, 0) <= 0) return []
      return pagedArticles[page].map((article, i) => {
        return <ArticleCard key={`${page}_${i}`} data={article} page={page} />
      })
    })
  }

  return (
    <NewsContainer>
      {isFetching ? 'Loading...' : renderArticleCards()}
    </NewsContainer>
  )
}
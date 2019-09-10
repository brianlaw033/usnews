import React from 'react';
import styled from 'styled-components'

import Avatar from './Avatar'

const ArticleCard = styled.a`
  width: 30%;
  min-width: 300px;
  flex: 0 0 auto;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  margin: 10px;
  text-align: left;
  text-decoration: none;
  color: #000;
`

const Content = styled.div`
  padding: 0 10px;
`

const Cover = styled.img`
  width: 100%;
`

const Title = styled.h3`
  margin-top: 10px;
`

const Description = styled.p`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.54);
`

export default ({ data, page }) => {
  return (
    <ArticleCard className={`article page${page + 1}`} href={data.url} target="_blank" rel="noopener noreferrer">
      <Avatar title={data.source.name} dateTime={data.publishedAt}/>
      {data.urlToImage && <Cover src={data.urlToImage} alt={data.title}/>}
      <Content>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
      </Content>
    </ArticleCard>
  )
}
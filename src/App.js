import React, { useEffect, useState, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from "react-helmet";

import { getNews } from './actions/newsActions'
import NavBar from './components/NavBar'
import NewsContainer from './containers/NewsContainer'
import { isObjectContainKeyword } from './utils'

import './App.css';

export const AppState = createContext()

function App() {
  const [state, setState] = useState({ keyword: null });
  const dispatch = useDispatch()

  useEffect(() => { dispatch(getNews()) }, [dispatch])

  const articles = useSelector(state => state.news.data)

  const onSearch = keyword => {
    if (!keyword) return articles
    return articles.filter((article) => {
      return isObjectContainKeyword({ title: article.title, description: article.description }, keyword)
    })
  }

  return (
    <div className="App">
      <Helmet>
        <title>US News</title>
        <meta name="description" content="News from Washington Post and New York Times" />
        <meta name="keywords" content="news,washington post,new york times,article" />
      </Helmet>
      <AppState.Provider value={{ setState }}>
        <NavBar />
        <NewsContainer articles={onSearch(state.keyword)} />
      </AppState.Provider>
    </div>
  );
}

export default App;

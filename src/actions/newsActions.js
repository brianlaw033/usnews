import axios from 'axios'

export const REQUEST_NEWS = 'REQUEST_NEWS'
export const RECEIVE_NEWS = 'RECEIVE_NEWS'

const requestNews = () => {
  return {
    type: REQUEST_NEWS
  }
}

const receiveNews = (payload) => {
  return {
    type: RECEIVE_NEWS,
    payload
  }
}

export const getNews = () => async dispatch => {
  try {
    dispatch(requestNews())
    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        domains: 'washingtonpost.com,nytimes.com',
        apiKey: process.env.REACT_APP_API_KEY,
        pageSize: 100
      }
    })
    dispatch(receiveNews(response.data.articles))
  }
  catch (err) {
    console.log(err)
  }
}
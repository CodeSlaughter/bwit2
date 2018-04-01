import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ARTICLES = 'GET_ARTICLES'

/**
 * INITIAL STATE
 */
const defaultArticles = []

/**
 * ACTION CREATORS
 */
const getArticles = (articles) => ({type: GET_ARTICLES, articles})


/**
 * THUNK CREATORS
 */
export const fetchArticles = () =>
  dispatch =>
    axios.get('/api/articles')
      .then(res =>
        dispatch(getArticles(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function reducer(articles = [], action) {
  switch (action.type) {
    case GET_ARTICLES:
      return action.articles
    default:
      return articles
  }
}

import axios from 'axios';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const LOAD_NEXT_ARTICLE = 'LOAD_NEXT_ARTICLE';

const receiveArticles = (articles) => {
  return {
    type: RECEIVE_ARTICLES,
    receivedArticles: articles
  };
};

export const loadArticles = () => {
  return (dispatch) => {
    axios.get('/api/articles')
      .then(res => res.data)
      .then(articles => {
        const action = receiveArticles(articles);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
};

export const loadNextArticle = () => {
  return {
    type: LOAD_NEXT_ARTICLE
  }
}
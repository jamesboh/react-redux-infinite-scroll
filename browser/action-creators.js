export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const LOAD_NEXT_ARTICLE = 'LOAD_NEXT_ARTICLE';


const receiveArticles = function (articles) {
  return {
    type: RECEIVE_ARTICLES,
    receivedArticles: articles
  };
};

export const loadArticles = function () {
  return function (dispatch) {
    fetch('/api/articles')
      .then(res => res.json())
      .then(articles => {
        const action = receiveArticles(articles);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
};

export const loadNextArticle = function() {
  return {
    type: LOAD_NEXT_ARTICLE
  }
}
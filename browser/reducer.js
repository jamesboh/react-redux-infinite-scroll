import { RECEIVE_ARTICLES, LOAD_NEXT_ARTICLE } from './action-creators';

const initialState = {
		allArticles: [],
		loadedArticles: [],
		remainingArticles: []
}

function articlesReducer (state = initialState, action) {
	switch (action.type) {
		case RECEIVE_ARTICLES: 
			return Object.assign({}, state, {
				allArticles: action.receivedArticles,
				loadedArticles: [action.receivedArticles[0]],
				remainingArticles: action.receivedArticles.slice(1, action.receivedArticles.length)
			});
		case LOAD_NEXT_ARTICLE:
			return Object.assign({}, state, {
				loadedArticles: state.loadedArticles.concat(state.remainingArticles[0]),
				remainingArticles: state.remainingArticles.slice(1, state.remainingArticles.length)
			});
		default: return state;
	}
}

const rootReducer = articlesReducer;

export default rootReducer;
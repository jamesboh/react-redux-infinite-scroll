import { connect } from 'react-redux';
import { loadArticles, loadNextArticle } from '../action-creators';
import Articles from './Articles';

const mapStateToProps = (state) => {
	return {
		loadedArticles: state.loadedArticles,
		remainingArticles: state.remainingArticles
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoadArticles: () => dispatch(loadArticles()),
		nextArticle: () => dispatch(loadNextArticle())
	};
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const ArticlesContainer = componentCreator(Articles);
export default ArticlesContainer;
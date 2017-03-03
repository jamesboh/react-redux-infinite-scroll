import { connect } from 'react-redux';
import Articles from './Articles';

const mapStateToProps = function (state) {
  return {
  	
  };
};

const mapDispatchToProps = function (dispatch) {
  return {

  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const ArticlesContainer = componentCreator(Articles);
export default ArticlesContainer;

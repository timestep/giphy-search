import { connect } from 'react-redux';
import { QueryContainer } from '../../features';
import { dataSelector } from './query.selectors';
import { searchGifAction } from './query.actions';

const mapStateToProps = state => ({
  data: dataSelector(state),
});

const mapDispatchToProps = dispatch => ({
  query: (query) => dispatch(searchGifAction(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryContainer);

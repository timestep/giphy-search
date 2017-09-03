import { connect } from 'react-redux';
import { QueryComponent } from '../../features/query/query.component';
import { queryImageSelector } from './query.selectors';
import { searchGifAction } from './query.actions';

const mapStateToProps = state => ({
  image: queryImageSelector(state),
});

const mapDispatchToProps = dispatch => ({
  query: query => dispatch(searchGifAction(query)),
});

export const QueryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryComponent);

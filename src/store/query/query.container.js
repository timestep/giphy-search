import { connect } from 'react-redux';
import { QueryComponent } from '../../features/query/query.component';
import {
  queryImageSelector,
  historicalQueriesSelector,
} from './query.selectors';
import {
  searchGifAction,
  selectHistoricalImage,
} from './query.actions';

const mapStateToProps = state => ({
  url: queryImageSelector(state),
  historicalQueries: historicalQueriesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  query: query => dispatch(searchGifAction(query)),
  selectHistoricalImage: index => dispatch(selectHistoricalImage(index)),
});

export const QueryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryComponent);

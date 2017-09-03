import { connect } from 'react-redux';
import { TrendingComponent } from '../../features/trending/trending.component';
import { trendingGifs } from './trending.selectors';
import { trendingGifsAction } from './trending.actions';

const mapStateToProps = state => ({
  data: trendingGifs(state),
});

const mapDispatchToProps = dispatch => ({
  getTrendingGifs: () => dispatch(trendingGifsAction()),
});

export const TrendingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingComponent);

import { connect } from 'react-redux';
import { TrendingComponent } from '../../features';
import { dataSelector } from './trending.selectors';
import { trendingGifsAction } from './trending.actions';

const mapStateToProps = state => ({
  data: dataSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getTrendingGifs: () => dispatch(trendingGifsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrendingComponent);

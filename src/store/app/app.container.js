import { connect } from 'react-redux';
import { AppComponent } from '../../features';
import { dataSelector } from './app.selectors';
import { searchGifAction } from './app.actions';

const mapStateToProps = state => ({
  data: dataSelector(state),
});

const mapDispatchToProps = dispatch => ({
  query: (query) => dispatch(searchGifAction(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);

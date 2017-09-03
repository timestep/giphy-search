import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
});

const isDevEnv = process.env.NODE_ENV === 'development';

function configureStore(initialState) {
  const store = compose(_getMiddleware(), ..._getEnhancers())(createStore)(
    rootReducer,
    initialState,
  );

  _enableHotLoader(store);
  return store;
}

function _getMiddleware() {
  let middleware = [routerMiddleware(browserHistory), thunk];

  if (isDevEnv) {
    middleware = [
      logger,
      ...middleware,
    ];
  }

  return applyMiddleware(...middleware);
}

function _getEnhancers() {
  let enhancers = [];

  if (isDevEnv && window.devToolsExtension) {
    enhancers = [...enhancers, window.devToolsExtension()];
  }

  return enhancers;
}

function _enableHotLoader(store) {
  if (isDevEnv && module.hot) {
    module.hot.accept('./root-reducer', () => {
      const nextRootReducer = require('./root-reducer');
      store.replaceReducer(nextRootReducer);
    });
  }
}

export default configureStore;

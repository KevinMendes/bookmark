import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
// import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';
import authMiddleware from '../middlewares/authMiddlewares';

// reducer
import rootReducer from '../reducers/rootReducer';

const enhancers = composeWithDevTools(
  applyMiddleware(
    // ajaxMiddleware,
    authMiddleware,
    // ... middlewares
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;

import {configureStore, getDefaultMiddleware} from 'redux-starter-kit'
import logger from 'redux-logger'
import {appReducer} from './app/App.reducer';

const reducer = {
  app: appReducer
};

const middleware = [...getDefaultMiddleware(), logger]

const preloadedState = {};

const store = configureStore({
  reducer,
  middleware,
  devTools: NODE_ENV !== 'production',
  preloadedState
});

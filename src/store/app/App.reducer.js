import { createReducer } from 'redux-starter-kit'
import { increment, decrement } from './App.action'

export const appReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload
});

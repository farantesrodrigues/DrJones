import { createAction } from 'redux-starter-kit'
import {APP_ACTION_INCREMENT, APP_ACTION_DECREMENT} from "../constants";

export const increment = createAction(APP_ACTION_INCREMENT);
export const decrement = createAction(APP_ACTION_DECREMENT);

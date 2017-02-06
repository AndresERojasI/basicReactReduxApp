/**
 * Created by andresrojas on 2/3/17.
 */
import { combineReducers } from "redux"
import todoReducer from './todoReducer'

const reducers = combineReducers({
    todo: todoReducer
});

export default reducers;
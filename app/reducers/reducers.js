/**
 * Created by andresrojas on 2/3/17.
 */
import { combineReducers } from "redux"
import todoReducer from './todoReducer'

const reducers = combineReducers({
    todos: todoReducer
});

export default reducers;
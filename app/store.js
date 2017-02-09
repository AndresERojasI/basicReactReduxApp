/**
 * Created by andresrojas on 2/2/17.
 */
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducers from './reducers/reducers'

/**
 * Middlewares for redux.
 *  - Promise: dispatch async actions to handle them automatically
 *  - Thunk: dispatch action as functions to handle multiple actions in a single action
 *  - Logger: cool logger with pretty colors for the console
 * @type {GenericStoreEnhancer}
 */
const middleware = applyMiddleware(promise(), thunk, logger());

// Create the unique APP store, remember, it should be immutable
export default createStore(
    reducers, // Add the unique reducer that combines all of the others
    middleware
);
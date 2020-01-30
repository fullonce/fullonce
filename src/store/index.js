/*
 * @Author: your name
 * @Date: 2020-01-28 22:01:37
 * @LastEditTime : 2020-01-30 11:36:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \fullonce\src\store\index.js
 */
import {
    createHashHistory
} from 'history';
import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';
import {
    routerMiddleware
} from 'connected-react-router';
import {count} from './reduces/'
import createRootReducer from './reducers'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise'
export const history = createHashHistory()

const preloadedState = {}
export default createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
        applyMiddleware(
            thunk,
            reduxPromise,
            routerMiddleware(history), // for dispatching history actions
            logger,
            // ... other middlewares ...
        ),
    ),
)

/*
 * @Author: your name
 * @Date: 2020-01-28 22:04:53
 * @LastEditTime: 2020-01-28 22:52:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \fullonce\src\store\reducers.js
 */
// reducers.js
import {
    combineReducers
} from 'redux'
import {
    connectRouter
} from 'connected-react-router'
import {count} from './reduces/'
const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    count
     // rest of your reducers
})
export default createRootReducer
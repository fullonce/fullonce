/*
 * @Author: your name
 * @Date: 2020-01-28 15:49:20
 * @LastEditTime : 2020-01-30 17:42:03
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \fullonce\src\index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/App/App';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd';
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store/'
moment.locale('zh-cn');
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */}
            {/* <>
                <Switch>
                    <Route exact path="/" render={() => (<div>Match</div>)} />
                    <Route render={() => (<div>Miss</div>)} />
                </Switch>
            </> */}
            <ConfigProvider locale={zhCN}>
                <App />
            </ConfigProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



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
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store/'
const store = configureStore(/* provide initial state if any */)
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
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

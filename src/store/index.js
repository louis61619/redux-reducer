import { createStore, applyMiddleware, compose } from 'redux'
// import * as redux from 'redux';
// 可直接使用redux物件

import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';
import reducer from './reducer.js'

// composeEnhancers函數
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// 應用一些中間件
// 1.引入thunkMiddleware中間件

// 2.創建sagaMiddleware中間件
const sagaMiddleware = createSagaMiddleware()

const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware)
const store = createStore(reducer, composeEnhancers(storeEnhancer))

sagaMiddleware.run(saga)

export default store
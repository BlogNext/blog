/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-06-19 12:22:40
 * @LastEditros: 
 * @LastEditTime: 2021-06-20 13:44:04
 */
import {getList} from '../api'

import {
  all,
  call,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';

function* fetch_blog_list ({payload}) {
  console.log(...arguments, 22222222222)
  try {
    const res = yield call(getList, {id: payload.id});
    if(res.code === 0) {
      yield put({type: 'changeMenuList', payload: res});
    } else {
      yield put({type: 'error'});
    }
  } catch (err) {
    console.log(err, 'error')
  }
}

function* get_blog_list() {
  console.log('get_blog_list', 111111111111111111)
  yield takeLatest('get_blog_list', fetch_blog_list)
}

function* getPage({payload}, { call, put }) {
  yield put({
    type: 'changeMenuPage',
    payload: payload.page
  });
}

// 清空分类信息
function* cleanType({ payload }, { call, put }) {
  yield put ({
    type: 'cleanTypeHandle',
  })
}

// 设置分类信息
function* setType({ payload }, { call, put, select }) {
  
  const blog_type_id = yield select(state => state.menu.type_id)
  if(payload.id === 'private' && blog_type_id === 'private') {
    const token = yield select(state =>state.menu.token)
    if(token === null || token === '') {
      // 未登录状态
      yield put({
        type: 'getLists',
        payload: {},
      });
    }
  }
  yield put ({
    type: 'setTypeHandle',
    payload
  })
}



function* getDetailInfo({payload}, { call, put, select}) {
  const response = yield call(getDetail, {id: payload });
  if(response.code === 0) {
    yield put({
      type: 'setDetail',
      payload: response,
    });
    yield put({
      type: 'setDetailId',
      payload: payload,
    })
  } else if(response.code === 10002) {
    // 缺少token
    yield put({
      type: 'setLoginStatus',
      payload: { status: true },
    });
  }
}

export default function* rootSaga(){
  yield all([
    get_blog_list()
  ])
}

/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-06-19 08:46:38
 * @LastEditros: 
 * @LastEditTime: 2021-06-22 21:13:57
 */
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import rootReducer, {
  initState
} from './reducer';
// import thunk from 'redux-thunk';
import rootSaga from './saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
function configureStore(initialState = initState) {
  // const store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware])); // saga是系统的常驻进程
  // sagaMiddleware.run(rootSaga);
  // return store;
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...[logger])
    // applyMiddleware(...[sagaMiddleware, logger])

  );
  // sagaMiddleware.run(rootSaga);

  return store;
}
export default configureStore;
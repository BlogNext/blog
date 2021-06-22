/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-06-19 08:46:38
 * @LastEditros: 
 * @LastEditTime: 2021-06-22 22:58:38
 */
import {
  createStore,
  applyMiddleware,
} from 'redux';
import rootReducer, {
  initState
} from './reducer';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    // 开发模式打印redux信息
    const { logger } = require("redux-logger");
    middleware.push(logger);
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
function configureStore(initialState = initState) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([])
  )

  return store;
}
export default configureStore;
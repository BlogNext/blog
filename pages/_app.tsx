/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 1985-10-26 16:15:00
 * @LastEditros: 
 * @LastEditTime: 2021-06-29 20:39:30
 */
import 'antd/dist/antd.css';
import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import configureStore

from '../store/store'
function MyApp({ Component, pageProps }: AppProps) {
  const store = configureStore(pageProps.configureStore)
  return  (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp

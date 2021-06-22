/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 1985-10-26 16:15:00
 * @LastEditros: 
 * @LastEditTime: 2021-06-19 13:12:36
 */
import '../styles/globals.css'
import 'antd/dist/antd.css';
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

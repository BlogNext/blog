/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-06-18 23:43:42
 * @LastEditros: 
 * @LastEditTime: 2021-06-19 08:12:58
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript  />
          {/* <script src="/bg_canvas.js"></script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
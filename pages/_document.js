/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-06-18 23:43:42
 * @LastEditros: 
 * @LastEditTime: 2021-06-29 21:17:53
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
        </body>
        <Head >
          <script text src="/bg_canvas.js"></script>
        </Head >
      </Html>
    )
  }
}

export default MyDocument
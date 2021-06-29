/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-06-18 23:43:42
 * @LastEditros: 
 * @LastEditTime: 2021-06-29 21:09:49
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
          <script src="/bg_canvas.js"></script>
        </Head >
      </Html>
    )
  }
}

export default MyDocument
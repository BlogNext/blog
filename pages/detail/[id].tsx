/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-06-18 20:59:37
 * @LastEditros: 
 * @LastEditTime: 2021-06-29 20:06:47
 */
import styles from './detial.module.css'
import Header from '../../component/header';
import Aside from '../../component/aslide'
import SlideBar from '../../component/slidebar'
import marked from 'marked'
import { Badge } from 'antd'
import * as dayjs from 'dayjs'
const hljs = require('highlight.js')
import 'highlight.js/styles/base16/material-darker.css'
import { UserOutlined, FieldTimeOutlined, MessageOutlined, EyeOutlined, BarChartOutlined } from '@ant-design/icons'
import common from '../../styles/common.module.css'

let localizedFormat = require('dayjs/plugin/localizedFormat')



/**
 * 为代码块显示添加行号
 * @param {String} code MD的代码内容
 */
function beforNumber(code: any) {
  if (!code.trim()) {
    return code;
  }
  const list = code.split('\n');
  const spanList = ['<span aria-hidden="true" line-row>'];
  list.forEach(() => {
    spanList.push('<span></span>');
  });
  spanList.push('</span>');
  list.push(spanList.join(''));
  return list.join('\n');
}

interface IProps {
  id: number;
  detail: any;
}
const DetailLayout = (props: IProps) => {

  const { detail } = props

  dayjs.extend(localizedFormat)
  
  marked.setOptions({ // marked 设置
    renderer: new marked.Renderer(),
    gfm: true,
    // tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code: any) {
      return beforNumber(hljs.highlightAuto(code).value)
    }
  })

  let html = marked(detail.content).replace(/img/g, 'img referrerPolicy="no-referrer"')


  return (
    <div className={common.layout} >
      <div className={common.header}>
        <div className={common.header_container}><Header /></div>
      </div>
      <div className={`${common.container} ${common.flex}`}>
        <div className={common.aside}><Aside /></div>
        <div className={`${common.content} ${common.flex}`}>
          <div className={common.main}>
            <div className={styles.detail}>
              {detail.id && (
                <div className={styles.wrapper}>
                  <div className={`${styles.header} ${common.flex}`}>
                    <h1 className={styles.title}> {detail.title} </h1>
                    <div className={`${styles.info} ${styles.title}`}>
                      <div>
                        <UserOutlined className={styles.info_icon} />
                        <span> {detail.user_info.nickname} </span>
                      </div>
                      <div>
                        <FieldTimeOutlined className={styles.info_icon} />
                        <span>{dayjs.unix(detail.created_at).locale('en').format('LL')}  </span>
                      </div>
                      <div>

                        <EyeOutlined className={styles.info_icon} />
                        <span>{detail.browse_total} views</span>
                      </div>
                      <div>

                        <BarChartOutlined className={styles.info_icon} />
                        <span>1888 words</span>
                      </div>
                      <div>
                        <Badge dot>
                          <MessageOutlined className={styles.info_icon} />
                        </Badge>
                        <span>No comments</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.content} >
                    <div className={styles.main} dangerouslySetInnerHTML={{ __html: html }}></div>
                  </div>
                </div>
              )}
            </div>

          </div>
          <div className={`${common.slidebar} ${common.flex}`}><SlideBar /></div>
        </div>
      </div>

    </div>
  )
}

export async function getServerSideProps (context: any) {
  // const res = await getDetail({id: context.query.id})
  const res = await fetch(`https://blog.laughingzhu.cn/front/blog/detail?id=${context.query.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8;'
    },
    // body: JSON.stringify({id: context.query.id})
  })
  const json = await res.json()
  //here,you can fetch data by context.query
  let response = null;
  if (json.code === 0) {
    response = json.data
  }
  return {props: {detail: response} }
}

// export async function getStaticProps(params) {
//   // 调用外部 API 获取博文列表
//   console.log(params, 'getStaticProps')
//   const res = await getDetail(1)
//   const posts = await res.json()

//   // 通过返回 { props: { posts } } 对象，Blog 组件
//   // 在构建时将接收到 `posts` 参数
//   return {
//     props: {posts}
//   }
// }

export default DetailLayout;
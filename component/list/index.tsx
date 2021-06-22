/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-05-12 21:17:25
 * @LastEditros: 
 * @LastEditTime: 2021-06-22 23:03:44
 */
import React, { useEffect, useState } from 'react'
import { Badge, Pagination } from 'antd'
import { UserOutlined, FieldTimeOutlined, MessageOutlined } from '@ant-design/icons'
import * as dayjs from 'dayjs'
var localizedFormat = require('dayjs/plugin/localizedFormat')
import styles from './style.module.css'
import router from 'next/router'
import { connect } from 'react-redux'
import common from '../../styles/common.module.css'
const {flex} = common
interface IProps {
  type_id: number,
  source: any,
  pageChange: any;
  pageConf: any
}
function List (props: IProps) {
  dayjs.extend(localizedFormat)
  const detailView = (data: any) => {
    // window.localStorage.setItem('detail', JSON.stringify(data))
    router.push({
      pathname: `/detail/${data.id}`,
    })
  }

  const pageChange = (e: number) => {
    props.pageChange(e)
  }




  return (
    <div className={`${styles.list} ${flex}`}>
      { props.source.length > 0 && props.source.map((item: any, index: number) => {
        return (
          <div onClick={() => detailView(item)} className={`${styles.item} ${flex}`} key={`component-list_item-${index}`}>
            <div className={styles.item_img}style={{ backgroundImage: `url(${item.cover_plan_info.full_url})`}} />

            <div className={`${styles.item_info} ${flex}`}>
              <div className={styles.info_title}> {item.title} </div>
              <div className={styles.info_desc}> {item.abstract} </div>
              <div className={styles.info_line} />
              <div className={`${styles.utils} ${flex}`}>
                <div>
                  <UserOutlined className={styles.utils_icon}/>
                  <span> {item.user_info.nickname} </span>
                </div>
                <div>
                  <FieldTimeOutlined className={styles.utils_icon}/>
                  <span>{`${dayjs.unix(item.created_at).locale('en').format('LL')}`}  </span>
                </div>
                <div>
                  <Badge dot>
                    <MessageOutlined className={styles.utils_icon} />
                  </Badge>
                  <span>No comments</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      {props.source.length > 0 && <Pagination onChange={(e) => pageChange(e)} className={styles.pagination} showLessItems  current={props.pageConf.page} total={props.pageConf.total} />}
      
    </div>
  )
}


export default connect()(List);
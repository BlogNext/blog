import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { SettingOutlined, MessageOutlined, BulbOutlined, KeyOutlined } from '@ant-design/icons';
import { getSearchList } from '../../api'
import { Select, Spin } from 'antd'
import styles from './header.module.css'
import globle from '../../styles/common.module.css'
import { connect } from 'react-redux';
import router from 'next/router';
import { withRouter } from 'next/router'

const {flex} = globle

function Header (props: any) {
  const [data, setData] = useState([])
  const [value, setValue] = useState(undefined)
  const [fetching, setFetching] = useState(false)
  const router = props.router


  const getSearch = async(value: any) => {
    
    let res = await getSearchList({keyword: value})
    if(res.code === 0) {
      setData(res.data.list)
    } else  {
      alert('数据有误')
    }
  }

  const fetchData = debounce(getSearch, 800)

  const handleChange = (value: any) => {
    router.push({
      pathname: '/detail',
      query: {
        id: value.value
      }
    })
  }

  const titleHandle = () => {

    if(router === '/index') {
      // 在首页，清除分类信息
      props.dispatch({
        type: 'setTypeHandle',
        payload: {id: null}
      })
    } else {
      // 不在首页，返回首页
      router.push({
        pathname: '/index',
      })
    }
  }

  return(
    <div className={`${styles.header} ${flex}`}>
      <div className={`${styles.title} ${flex}`}>
        {/* <HomeOutlined className='component-header_title_icon' /> */}
        <span onClick={titleHandle}>LaughingZhu's Blog</span>
      </div>

      <div className={`${styles.container} ${flex}`}>
        <Select
          // mode='''
          showSearch
          showArrow={data.length > 0 ? true : false}
          className={styles.search}
          labelInValue
          value={value}
          placeholder='搜索文章 🔍'
          notFoundContent={fetching ? <Spin size="small" /> : null}
          filterOption={false}
          onSearch={fetchData}
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          {data.map((d: any) => (
            <Select.Option value={d.id} key={`search-item-${d.id}`}>{d.title}</Select.Option>
          ))}
        </Select>
      </div>

      <div className={`${styles.tools} ${flex}`}>
        <div className={`${styles.tools_item} ${flex}`}>
          <SettingOutlined className="component-header_tools_item_icon" />
        </div>
        <div className={`${styles.tools_item} ${flex}`}>
          <MessageOutlined className="component-header_tools_item_icon" />
        </div>
        <div className={`${styles.tools_item} ${flex}`}>
          <BulbOutlined className="component-header_tools_item_icon" />
        </div>
        <div className={`${styles.tools_item} ${flex}`}>
          <KeyOutlined className="component-header_tools_item_icon" />
        </div>
      </div>
    </div>
  )
}


export default connect()(withRouter(Header));

/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 1985-10-26 16:15:00
 * @LastEditros: 
 * @LastEditTime: 2021-06-29 20:43:08
 */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/common.module.css'
import Header from '../component/header';
import Aside from '../component/aslide'
import SlideBar from '../component/slidebar'
import Slogan from '../component/slogan'
import List from '../component/list'
import { useState, useEffect } from 'react'
import { getList } from '../api';
import { connect } from 'react-redux';

interface IProps {
  children: any,
  location: any,
  loginStatus: boolean,
  dispatch: any,
  type_id: any
}


function BasicLayout (props: IProps) {
  const [pageConf, setPageConf] = useState({page: 1, per_page: 10, total: 1})
  const [bloglist, setBlogList] = useState([])
  useEffect (() => {
    backTop()
    _initList();

  }, [pageConf.page, props.type_id])

  const backTop = () => {
    let anchorElement = document.getElementById('main');
    if(anchorElement) {        // 如果对应id的锚点存在，就跳转到锚点
      anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
  }


  const _initList = async() => {
    const res = await getList({...pageConf, blog_type_id: props.type_id})
    if(res.code === 0) {
      setBlogList(res.data.list)
      setPageConf({
        ...pageConf,
        total: res.data.count
      })
    }
  }


  const pageChange = (page: number) => {
    setPageConf({
      ...pageConf,
      page
    })
  }



  return (

    <div className={styles.layout} id='main'>
      <div className={styles.header}>
        <div className={styles.header_container}><Header /></div>
      </div>
      <div className={`${styles.container} ${styles.flex}`}>
        <div className={styles.aside}><Aside /></div>
        <div className={`${styles.content} ${styles.flex}`}>
          <div className={styles.main}>
            <Slogan />
            <List pageChange={pageChange} source={bloglist} pageConf={pageConf} />
          </div>
          <div className={`${styles.slidebar} ${styles.flex}`}><SlideBar /></div>
        </div>
      </div>

    </div>
  );
}


export default connect((store: any) => (
  {
    type_id: store.type_id,
  }
))(BasicLayout);

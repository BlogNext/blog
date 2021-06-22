/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 1985-10-26 16:15:00
 * @LastEditros: 
 * @LastEditTime: 2021-06-22 21:04:30
 */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/common.module.css'
import Header from '../../component/header';
import Aside from '../../component/aslide'
import SlideBar from '../../component/slidebar'
import Slogan from '../../component/slogan'
import List from '../../component/lsit'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getList } from '../../api';

interface IProps {
  children: any,
  location: any,
  loginStatus: boolean,
  dispatch: any,
  type_id: any
}
interface IState {
  cateGoryConf: any
}

function BasicLayout (props: IProps) {
  const [pageConf, setPageConf] = useState({page: 1, per_page: 10, total: 1})
  const [bloglist, setBlogList] = useState([])
  useEffect (() => {
    _initList()
  }, [pageConf.page, props.type_id])


  const _initList = async() => {
    const res = await getList({...pageConf, id: props.type_id})
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

    <div className={styles.layout} >
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


export default connect()(BasicLayout);

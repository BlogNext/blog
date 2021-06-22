import React, { useEffect, useState } from 'react';
import { FireOutlined, MessageOutlined, GiftOutlined, BellOutlined, FieldTimeOutlined, NodeIndexOutlined } from '@ant-design/icons'
import { getBlogBySort, getBlogInfo } from '../../api'
import styles from './style.module.css'
import * as dayjs from 'dayjs'
import { message } from 'antd';
import { getLocalStorage, setLocalStorage, isBrowser } from '../../utils/utils';
import common from '../../styles/common.module.css'
const {flex} = common
const menuData = [
  {
    label : 'Popular artivles',
    sort_dimension: 'browse_total',
    string: 'browse_total',
    icon: <FireOutlined className={styles.menu_item_icon} />,
    itemIcon: <FireOutlined className={styles.list_item_icon} />
  },
  {
    label : 'Latest comments',
    sort_dimension: 'created_at',
    string: 'browse_total',

    icon: <FieldTimeOutlined className={styles.menu_item_icon} />,
    itemIcon: <FieldTimeOutlined className={styles.list_item_icon} />
  },
  {
    label : 'Random articles',
    string: 'browse_total',

    sort_dimension: '',
    icon: <GiftOutlined className={styles.menu_item_icon} />,
    itemIcon: <MessageOutlined className={styles.list_item_icon} />

  }
]

const infoData = [
  {
    label: 'Posts Num',
    icon: <BellOutlined className={styles.info_desc_icon} />,
    num: 1,
    string: 'blog_total'
  },
  {
    label: 'Comments Num',
    icon: <MessageOutlined className={styles.info_desc_icon} />,
    string: ''
  },
  {
    label: 'Operating Days',
    icon: <FieldTimeOutlined className={styles.info_desc_icon} />,
    num: 1,
    string: 'diff_time'
  },
  {
    label: 'Last activity',
    icon: <NodeIndexOutlined className={styles.info_desc_icon} />,
    num: 1,
    string: 'last_create_at'
  }
]

function Slidebar (props: any) {
  const [ current, setCurrent ] = useState(0)
  const [listData, setListData] = useState([])
  const [blogInfo, setBlogInfo] = useState({})

  

  // 初始化 blog info data，初始化请求一次
  useEffect(() => {
    getInfo()
  }, [''])

  const getInfo = async () => {
    if(!isBrowser()) return false;

    const info = getLocalStorage('blog_info') ? getLocalStorage('blog_info').data : {};

    if(info.blog_total > 0) {
      setBlogInfo(info)
    } else {
      let res = await getBlogInfo()
      if(res.code === 0) {
        // 获取成功
        setLocalStorage('blog_info', res.data.list, 'hour')
        setBlogInfo(res.data.list)
      } else {
        message.error(res.msg, 2)
      }
    }
  }

  // 初始化sortListData，跟随current 变化
  useEffect(() => {
    getListData()
  }, [current])


  const getListData = async() => {

    if(!isBrowser()) return false;

    const hot = getLocalStorage('blog_hot') ? getLocalStorage('blog_hot').data : [];
    if(hot.length > 0) {
      setListData(hot)
    } else {
      let res = await getBlogBySort({ sort_dimension: menuData[current].sort_dimension})
      if(res.code === 0) {
        // success
        setLocalStorage('blog_hot', res.data.list, 'hour')

        setListData(res.data.list)
      }
    }
  }


  const menuChange = (index: number) => {
    if(index === current) return false

    setCurrent(index)
    return false;
  }
  

  const getItemView = (item: any) => {

    switch (current) {
      case 0:
        return item[menuData[current].string]
        break;
      case 1:
        return dayjs.unix(item.cover_plan_info.created_at).locale('en').format('ll')
        break;
      case 2:
    
        break;
      default:
        break;
    }
  }

  /**
   * 根据时间错
   * @param diffTimestamp 两个时间戳的差，单位秒
   */
  const getRemainderTime = (diffSecond: number) => {
    let runTime = diffSecond
    let year = Math.floor(runTime / 86400 / 365);

    runTime = runTime % (86400 * 365);
    
    let month = Math.floor(runTime / 86400 / 30);

    runTime = runTime % (86400 * 30);

    let day = Math.floor(runTime / 86400);

    // runTime = runTime % 86400;

    // let hour = Math.floor(runTime / 3600);

    // runTime = runTime % 3600;

    // let minute = Math.floor(runTime / 60);

    // runTime = runTime % 60;

    // let second = runTime;

　　return `${month === 0 ? '12 M ' : month + ' M '}${day === 0 ? '' : day + ' D'} `;
  }

  const getBlogInfoValue = (type: string, value: any) => {
    switch (type) {
      case 'blog_total':
        return value
        break;
      case 'diff_time':
        return getRemainderTime(value)
        break;
      case 'last_create_at':
        return dayjs.unix(value).locale('en').format('ll')
        break;
      default:
        return 0
        break;
    }
  }


  const listHandle = (detail_id: number) => {
    // history.replace(`/detail/${detail_id}`)
    history.replace({
      pathname: `/detail/${detail_id}`,
    })
  }

  const listView = listData.length > 0 && listData.map((item: any, index: number) => {
    return (
      <div onClick={() => listHandle(item.id)} className={`${styles.list_item} ${flex}`} key={`component-slidebar--menu_content--list-item-${index}`}>
        <div style={{ backgroundImage: `url('${item.cover_plan_info.full_url}')` }}  className={`${styles.list_item_avatar}`} />
        <div className={styles.list_item_desc}>
          <div className={styles.list_item_label}> {item.title} </div>
          <div>
            {menuData[current].itemIcon}
            {getItemView(item)}
          </div>

        </div>
      </div>
    )
  })

  const infoView = infoData.length > 0 && infoData.map((item: any, index: number) => {
    return (
      <div className={`${styles.info_item} ${flex}`} key={`component-slidebar--info_content-item-${index}`}>
        <div className={`${styles.info_desc} ${flex}`}>
          { item.icon }
          <div className={styles.info_desc_label}>{ item.label }</div>
        </div>
        <div className={styles.info_count}> {getBlogInfoValue(infoData[index].string, blogInfo[infoData[index].string])} </div>
      </div>
    )
  })
  
  return(
    <div className={`${styles.slidebar} ${flex}`}>


      <div className={`${styles.menu} ${flex}`}>
        <div className={`${styles.header} ${flex}`}>
          { menuData.map((item: any, index: any) => {
            return (
              <div onClick={() => menuChange(index)} className={`${styles.menu_item} ${flex}`} key={`component-slidebar--menu_header-item-${item.label}`}>
                {item.icon}
                <span className={current === index ? styles.menu_item_active_line: '' }/>
              </div>
            )
          })}
        </div>
        <div className={`${styles.content} ${flex}`}>
          <div>{ menuData[current].label }</div>
          <div className={styles.list}>{listView}</div>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.info_title}>Blog Info</div>
        <div className={styles.info_content}> {infoView} </div>
      </div>
    </div>
  )
}

export default Slidebar;

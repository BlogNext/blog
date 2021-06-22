import React, { useEffect, useState } from 'react';
import { getCategoryType } from '../../api'
import { createFromIconfontCN } from '@ant-design/icons';
import { Divider, Tooltip } from 'antd'
import { getLocalStorage, isBrowser, setLocalStorage } from '../../utils/utils'
import styles from './style.module.css'
import globel from '../../styles/common.module.css'
import router from 'next/router';
import { connect } from 'react-redux';
const { flex } = globel
const { aside, info, avatar, slogan, container, menu, menu_item, name, item_title, item_children, item_children_icon, item_children_label, tools, tools_item, tools_item_icon, tools_item_label } = styles

// 本地菜单config

// iconfont 库
const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2023298_twboscs9oke.js', // 在 iconfont.cn 上生成
});

const IconAside = [
  {
    icon: 'icon-computer',
    name: 'Front-End'
  },
  {
    icon: 'icon-fuwuqi',
    name: 'Service'
  },
  {
    icon: 'icon-zailiulanqidakai',
    name: 'Browser'
  },
  {
    icon: 'icon-books',
    name: 'Book'
  }
]

const toolsData = [
  {
    label: '管理',
    desc: '后台管理',
    icon: 'icon-setting'
  },
  {
    label: '文章',
    desc: '文章RSS',
    icon: 'icon-rss1'
  },
  {
    label: 'Comment',
    desc: '评论RSS地址',
    icon: 'icon-comment'
  },
]


function Aside (props: any) {
  // 遍历菜单
  // const [ typeList, setTypeList ] = useState(: null )
  const [ typeList, setTypeList ] = useState()

  useEffect(() => {
    _initPage()
  }, [])

  useEffect(() => {
    if(typeList === null) {
      getType()
    }
  }, [typeList])
  

  const _initPage = () => {
    if(!isBrowser()) return false;

    setTypeList(getLocalStorage('blog_category') ? getLocalStorage('blog_category').data : null)

    return;

  }

  const getType = async() => {
    let res = await getCategoryType()
    if(res.code === 0) {
      let pre = [
        {
          label: 'Navigation',
          path:'/Navigation',
          children: [
            {
              icon: 'icon-git-branch',
              label: 'Repository',
              path:'/Repository',
              children: []
            },
            {
              icon: 'icon-time',
              path:'/TimeMachine',
              label: 'TimeMachine',
              children: []
            },
            {
              icon: 'icon-private',
              path:'/Private',
              label: 'Private',
              id: 'private',
              children: []
            }
          ]
        },
        {
          label: 'Components',
          children: res.data.list
        }
      ]
      setLocalStorage('blog_category', pre, 'day')
      setTypeList(pre)
    }
  }

  // 根据配置返回aslide icon
  const getTypeIcon = (name: string, icon?: string) => {
    if(icon !== undefined) return <MyIcon className={item_children_icon} type={icon} />
    
    // 语雀上的分类
    const result = IconAside.find(item => {
      return item.name === name
    })

    if(result) return <MyIcon className={item_children_icon} type={result.icon} />
    
    return false
  }


  const typeHandle = (id: any) => {
    if (location.href.indexOf('/detail') < 0) {
      // 在首页，更新分类信息
      props.dispatch({
        type: 'setTypeHandle',
        payload: {id}
      })
    } else {
      // 不在首页，返回首页
      router.push({
        pathname: '/index',
      })
    }
    
  }
  
  const menuView = () => {
    return (typeList !== null) && (typeList !==undefined) && typeList.length > 0 && typeList.map((item: any, index: number) => {
      return (
        <div className={menu_item} key={`component-aside-container_menu_item-${index}`}>
          <div className={item_title}>{item.label ? item.label: item.yuque_name}</div>
          {item.children.length > 0 && (
            item.children.map((children: any, cIndex: number) => {
              return (
                <div onClick={() => typeHandle(children.id)} className={`${item_children} ${flex}`} key={`component-aside-container_menu_item--children${cIndex}`}>
                  {getTypeIcon(children.yuque_name, children.icon)}
                  <div className={item_children_label}>{ children.label ? children.label: children.yuque_name}</div>
                </div>
              )
            })
          )}
        </div>
      )
    })
  }
  
  const toolsView = () => {
    return toolsData.length > 0 && toolsData.map((item: any, index: number) => {
      return (
        <Tooltip placement="top" title={item.desc} key={`aside_tools_item-${index}`}>
          <div className={`${tools_item} ${flex}`}>
            <MyIcon className={tools_item_icon } type={item.icon} />
            <div className={tools_item_label}>{item.label}</div>
          </div>
        </Tooltip>
        
      )
    })
  }


  return(
    <div className={`${aside}  ${flex}`}>
      <div className={`${info} ${flex}`}>
        <div className={avatar} />
        <div className={name}>LaughingZhu</div>
        <div className={slogan}>Make or miss win or lose I put my name on it</div>
      </div>
      <Divider style={{ backgroundColor: '#2e3344', height: '1px', marginTop: '0'}} />
      
      <div className={`${container} ${flex}`}>
        <div className={menu}>
          { menuView() }
        </div>

        <div className={`${tools} ${flex}`}>
          { toolsView() }
        </div>
      </div>
    </div>
  )
}


export default connect()(Aside);

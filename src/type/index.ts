export type MEUN_TYPE = {
  label: string;
  icon: string;
  action?: string;
  desc?: string;
};

export enum MENU_ACTION {
  Setting = 'setting',
  Article = 'article',
  Comment = 'comment'
}

export const BOTTOM_MENUS: MEUN_TYPE[] = [
  {
    action: MENU_ACTION.Setting,
    label: '管理',
    desc: '后台管理',
    icon: 'icon-setting'
  },
  {
    label: '文章',
    desc: '文章RSS',
    icon: 'icon-rss1',
    action: MENU_ACTION.Article
  },
  {
    label: '评论',
    desc: '评论RSS地址',
    icon: 'icon-comment',
    action: MENU_ACTION.Comment
  }
];

export const ASIDE_MENUS: MEUN_TYPE[] = [
  {
    icon: 'icon-computer',
    label: 'Front-End'
  },
  {
    icon: 'icon-fuwuqi',
    label: 'Service'
  },
  {
    icon: 'icon-zailiulanqidakai',
    label: 'Browser'
  },
  {
    icon: 'icon-books',
    label: 'Book'
  },
  {
    icon: 'icon-react',
    label: 'React'
  }
];

export const TOP_MENUS: MEUN_TYPE[] = [
  {
    icon: 'icon-setting',
    label: '设置'
  },
  {
    icon: 'icon-youjian',
    label: '咨询'
  },
  {
    icon: 'icon-zhuti_tiaosepan_o',
    label: '主题'
  },
  {
    icon: 'icon-denglu',
    label: '登录'
  }
];

/* 管理后台相关 */

export const END_ASIDE_MENUS: MEUN_TYPE[] = [
  {
    icon: 'icon-setting',
    label: '文章列表'
  },
  {
    icon: 'icon-youjian',
    label: '新增文章'
  },
  {
    icon: 'icon-zhuti_tiaosepan_o',
    label: '评论管理'
  }
];

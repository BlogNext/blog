export type MEUN_TYPE = {
  label: string;
  desc?: string;
  icon: string;
};

export const BOTTOM_MENUS: MEUN_TYPE[] = [
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
    label: '评论',
    desc: '评论RSS地址',
    icon: 'icon-comment'
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

/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-05-28 16:29:48
 * @LastEditros: 
 * @LastEditTime: 2021-06-18 23:35:15
 */

import styles from './style.module.css'
import common from '../../styles/common.module.css'


export default function Slogan (props: any) {
  const sloganClick = () => {
    (window as any)._hmt.push(['_trackEvent', 'slogan点击', 'click']);
    (window as any).gtag('event', 'slogan click', {
      'event_category': 'click',
      'event_label': 'slogan',
    });
    
  }


  return (
    <div className={`${styles.slogan} ${common.flex}`}>
      <div className={styles.name} onClick={() => sloganClick()}  data-spotlight={`LaughingZhu's Blog`}>LaughingZhu's Blog</div>
      <div className={styles.desc} >桌上的文字太拥挤 想出去走走去散心</div>
    </div>
  )
}
/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-06-19 08:49:34
 * @LastEditros: 
 * @LastEditTime: 2021-06-19 13:57:44
 */
import { extend } from 'umi-request';
import { message } from 'antd';
/**
 * 异常处理程序
 */

const errorHandler = (error: any) => {
  const { response, data } = error;
  if (response && response.status) {
    // message.error(data.message, 2);
    return data
  }
  return response;
};
/**
 * 配置request请求时的默认参数
 */

const request = extend({
  // 默认错误处理
  errorHandler,
  credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.request.use((url: string, options: any) => {
  // message.loading('加载中', 0)


  options.headers = {
    
    'x-access-token': localStorage.getItem('blog_token') || ''
  }
  return (
    {
      url,
      options: { ...options },
    }
  );
});

request.interceptors.response.use((response: any) => {
  const { status } = response
  // message.destroy()

  if (status === 401) {
    // message.error('请重新登录！', 2, () => {
    // });
    // @HACK
    /* eslint-disable no-underscore-dangle */
    return;
  }

  return response;
})

export default request;

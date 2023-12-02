type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';
import config from '@/config';
export async function request(url: string, method: Method = 'GET'): Promise<any> {
  const option: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authority: config.local_key.user_auth
    }
  };

  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`${config.base_url}${url}`, option);
      console.log(res.status, '----res');
      if (res.status === 200) {
        resolve(res.json());
      } else {
        reject({
          code: 500,
          message: '请求失败'
        });
      }
    } catch (error) {
      reject({
        code: 500,
        message: '请求失败'
      });
    }
  });
}

export default request;

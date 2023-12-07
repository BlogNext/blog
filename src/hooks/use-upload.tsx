import qiniu from 'qiniu';
import { useCallback } from 'react';

export default function useUpload() {
  const _init = () => {
    qiniu.conf.ACCESS_KEY = 'Access_Key';
    qiniu.conf.SECRET_KEY = 'Secret_Key';
    console.log(qiniu.conf, '--------qiniu');
    // 创建上传策略
    const putPolicy = new qiniu.rs.PutPolicy({
      scope: 'sudoku'
    });

    // 设置上传策略

    // 生成上传凭证
    const token = putPolicy.uploadToken();
    console.log(token, '-----------quibuy tijeb');
  };

  const upload = useCallback(() => {
    const token = _init();
    return new Promise((resolve, reject) => {
      console.log('------------------上传路基');
      // if (!uploadToken) {
      //   reject({
      //     code: 0,
      //     message: '上传失败',
      //     path: ''
      //   });
      // }
      const key = `avatar/_${new Date().getTime()}.jpg`;
      // Taro.uploadFile({
      //   url: config.qiniu_upload, //仅为示例，非真实的接口地址
      //   filePath: file,
      //   name: 'file',
      //   header: {
      //     'Content-Type': 'multipart/form-data'
      //   },
      //   formData: {
      //     uploadToken,
      //     key
      //   },
      //   success(res: Taro.uploadFile.SuccessCallbackResult) {
      //     const data = JSON.parse(res.data);
      //     resolve({
      //       code: 1,
      //       message: '上传成功',
      //       path: `${config.qiniu_base}${data.key}!thumbnail`
      //     });
      //   },
      //   fail(res) {
      //     reject({
      //       code: 0,
      //       message: '上传失败',
      //       path: ''
      //     });
      //   }
      // });
    });
  }, []);

  return { upload };
}

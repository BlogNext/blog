import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import qiniu from 'qiniu';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {}

export async function GET(req: Request, res: NextResponse) {
  // 在这里配置七牛云的 Access Key 和 Secret Key
  const accessKey = 'your-access-key';
  const secretKey = 'your-secret-key';
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

  const options = {
    scope: 'your-bucket-name', // 替换成你的七牛云存储空间名
    expires: 3600
  };

  const putPolicy = new qiniu.rs.PutPolicy(options);
  const uploadToken = putPolicy.uploadToken(mac);

  res.status(200).json({ uploadToken });
}

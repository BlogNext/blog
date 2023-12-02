import { ConfigObject } from '@/type/confit';
import { merge } from 'lodash-es';

const envConfig = require(`./config.${process.env.NEXT_APP_ENV}`).default;

const config = merge({}, envConfig);

export default config as ConfigObject;

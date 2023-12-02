export type ConfigObject = typeof import('@/config/config.development').default &
  typeof import('@/config/config.production').default;

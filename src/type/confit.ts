export type ConfigObject = typeof import('@/config/config.dev').default &
  typeof import('@/config/config.prod').default;

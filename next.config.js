/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 1985-10-26 16:15:00
 * @LastEditros: 
 * @LastEditTime: 2021-06-18 21:21:50
 */
module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  plugins: [
    [
      'postcss-flexbugs-fixes',
      [
        'postcss-preset-env',
        {
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
          features: {
            'custom-properties': false,
          },
        },
      ],
    ]
  ]
}

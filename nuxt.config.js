export default {
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://localhost:3000', // Used as fallback if no runtime config is provided
    proxyHeaders: true,
    proxyHeadersIgnore: ['accept', 'host', 'cf-ray', 'cf-connecting-ip', 'content-length', 'content-md5', 'content-type', 'cookie', 'x-forwarded-port', 'x-forwarded-proto', 'x-real-ip']
  },
  head: {
    title: 'Steve Y biography',
    description: 'Biography page about Detroit Red Wings "Ultimate captain" Steve Yzerman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      {rel:'icon', type:'image/x-icon', href:'../images/favicon.ico' }
    ]
  },

  css: [
    '~/assets/styles/grid.sass',
    '~/assets/styles/common.sass',
  ]
}

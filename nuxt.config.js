export default {
  mode: 'universal',

  head: {
    title: 'TODO List Vue 2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Описание проекта' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  plugins: [],
  modules: [],
  build: {},
  buildModules: [
    '@nuxtjs/vuetify'
  ],
}

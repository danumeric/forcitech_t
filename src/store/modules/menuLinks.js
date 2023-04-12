//import router from '@/router'

export default {
  state: {
    linksData: [
      { id: 1, name: 'Преимущества Tele2', path: '#' },
      { id: 2, name: 'Тарифы', path: '#' },
      { id: 3, name: 'Акции и спецпредложения', path: '#' },
      { id: 4, name: 'Промотариф Tele2', path: '#' },
      { id: 5, name: 'Технология eSIM', path: '#' },
      { id: 6, name: 'Подключение нового абонента', path: '#' },
    ],
  },
  getters: {
    g_links_data(state) {
      return state.linksData
    },
  },
  mutations: {},
  actions: {},
}

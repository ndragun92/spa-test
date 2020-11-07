export const state = () => ({
  test: 'test'
})

export const getters = {

}

export const mutations = {

}

export const actions = {

  // Set delivery price
  nuxtServerInit (store, { req }) {
    const referer = req.headers.host || req.headers['x-forwarded-server']
    console.log('nuxtServerInit', {
      store: store.state.test,
      referer
    })
  },

  nuxtClientInit (store, { req }) {
    let referer = ''
    if (req && req.headers) {
      referer = req.headers.host || req.headers['x-forwarded-server']
    } else if (process.browser) {
      referer = window.location.host
    }
    console.log('nuxtClientInit', {
      store: store.state.test,
      referer
    })
  }
}

export default function ({ store, $axios, nuxtError, redirect, $config }, inject) {
  const api = $axios.create()
  // api.setBaseURL($config.CLIENT_BASE_API_URL)

  api.onRequest(config => {
    // const accessToken = store.getters[`auth/${ACCESS_TOKEN}`]
    // if (accessToken) {
    //   config.headers.Authorization = 'Bearer ' + accessToken
    // }

    return config
  })


  api.onError(async (error) => {
    return Promise.reject(error)
  })

  // Inject to context as
  inject('clientApi', api)
}

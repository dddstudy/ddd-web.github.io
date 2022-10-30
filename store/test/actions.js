import { LIST } from './constants'

export default {
  async [LIST] ({commit}) {
    const { data } = await this.$clientApi.get('https://picsum.photos/v2/list')
    commit(LIST, data)
  }
}

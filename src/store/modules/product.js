import api from '../../api'
const state = {
  all: []
}
const actions = {
  getAllProducts({ commit }) {
    api.getProducts(products => {
      commit('setProducts', products)
    })
  }
}
const mutations = {
  setProducts(state, products) {
    state.all = products
  },
  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
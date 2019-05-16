import api from '../../api'
const state = {
  items: [],
  checkStatus: null
}
const getters = {
  cartProduct(state, getters, rootState) {
    return state.items.map(({ id, quantity }) => {
      const products = rootState.product.all.find(product => product.id === id)
      return {
        title: products.title,
        price: products.price,
        quantity
      }
    })
  },
  totalPrice(state, getters) {
    return getters.cartProduct.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}
const actions = {
  addProducts({ commit, state }, product) {
    const cartItem = state.items.find(item => item.id === product.id)
    if (product.inventory > 0) {
      if (!cartItem) {
        commit('pushProduct', product)
      } else {
        commit('incrementProduct', cartItem.id)
      }
      commit('product/decrementProductInventory', { id: product.id }, { root: true })
    }
  },
  settlement({ commit, state }, product) {
    const saveCartItem = [...state.items]
    commit('resetStatus', null)
    api.buyProducts(
      product,
      () => {
        commit('resetStatus', 'success')
        commit('clearItems', { items: [] })
      },
      () => {
        commit('resetStatus', 'fail')
        commit('clearItems', { items: saveCartItem })
      }
    )
  }
}
const mutations = {
  pushProduct(state, product) {
    state.items.push({
      ...product,
      quantity: 1
    })
  },
  incrementProduct(state, id) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },
  clearItems(state, { items }) {
    state.items = items
  },
  resetStatus(state, status) {
    state.checkStatus = status
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
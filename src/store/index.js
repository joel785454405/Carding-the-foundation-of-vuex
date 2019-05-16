import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import product from './modules/product'
import cart from './modules/cart'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    cart
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})
export default store
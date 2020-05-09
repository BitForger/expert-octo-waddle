import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataLoading: false,
  },
  mutations: {
    dataIsLoading(state) {
      state.dataLoading = true;
    },
    dataStoppedLoading(state) {
      state.dataLoading = false;
    }
  },
  actions: {
  },
  modules: {
  }
})

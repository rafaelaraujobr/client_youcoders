import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    histories: localStorage['youcod3rs_histories'] ? JSON.parse(localStorage.getItem('youcod3rs_histories')) : [],
    rows: []
  },
  getters: {
    search: (state) => state.search,
    rows: (state) => state.rows,
    histories: (state) => state.histories.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    }),
  },
  mutations: {
    SET_SEARCH(state, payload) {
      state.search = payload;
    },
    SET_ROWS(state, payload) {
      state.rows = payload;
    },
    SET_HISTORIES(state, payload) {
      state.histories = payload;
    },
    ADD_HISTORY(state, payload) {
      if (state.histories.length == 0 || state.histories.filter(item => item.value === payload.value).length === 0)
        state.histories.push(payload);
    },
    REMOVE_HISTORY(state, payload) {
      state.histories = state.histories.filter(item => item !== payload);
    },
  },
  actions: {
    ActionSetSearch({ commit }, payload) {
      commit('SET_SEARCH', payload);
    },
    ActionSetRows({ commit }, payload) {
      commit('SET_ROWS', payload);
    },
    ActionSetHistories({ commit }, payload) {
      commit('SET_HISTORIES', payload);
    },
    ActionAddHistory({ commit }, payload) {
      commit('ADD_HISTORY', payload);
    },
    ActionRemoveHistory({ commit }, payload) {
      commit('REMOVE_HISTORY', payload);
    },
  },
  modules: {
    Auth
  }
})

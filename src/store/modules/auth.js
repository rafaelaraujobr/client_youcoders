export default {
    namespaced: true,
    state: {
        user: null,
        token: null,
    },
    getters: {
        user: (state) => state.user,
        token: (state) => state.token,
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload;
        },
        SET_TOKEN(state, payload) {
            state.token = payload;
        }
    },
    actions: {
        ActionSetUser({ commit }, payload) {
            commit('SET_USER', payload);
        },
        ActionSetToken({ commit }, payload) {
            commit('SET_TOKEN', payload);
        },
    },
};
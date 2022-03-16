export default {
    namespaced: true,
    state: {
        user: {},
        token: null,
        google_api_key: "AIzaSyDXvYiP4fLYom9O5KnLHf2utqtMgIPmTA0"
    },
    getters: {
        user: (state) => state.user,
        token: (state) => state.token,
        google_api_key: (state) => state.google_api_key,
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
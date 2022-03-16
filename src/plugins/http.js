import Vue from "vue";
import axios from "axios"
import store from "@/store";
import router from "@/router";

const install = (Vue) => {
    Vue.prototype.$http = axios.create({
        baseURL: process.env.VUE_APP_SERVER
    });
    //interceptar requisições
    Vue.prototype.$http.interceptors.request.use(
        (config) => {
            const token = localStorage['agendaih_token'] ? localStorage.getItem('agendaih_token') : null
            if (token) config.headers['Authorization'] = `Bearer ${token}`;
            return config;
        },
        (error) => Promise.reject(error)
    );
    Vue.prototype.$http.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            if (error.response.status == 401) {
                store.dispatch("User/ActionSetUser", null)
                localStorage.removeItem("agendaih_token");
                router.push({ name: "SignIn" })
            }
            return Promise.reject(error)
        }
    );
}

Vue.use({ install })

export default { install };

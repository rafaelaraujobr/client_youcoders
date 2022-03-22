import Vue from "vue";
import axios from "axios"
// import store from "@/store";
// import router from "@/router";

const install = (Vue) => {
    const KEY = "AIzaSyDXvYiP4fLYom9O5KnLHf2utqtMgIPmTA0"
    Vue.prototype.$youtubeApi = axios.create({
        baseURL: "https://www.googleapis.com/youtube/v3/",
        params: {
            part: 'snippet',
            maxResults: 50,
            key: KEY
        }
    });
    //interceptar requisições
    Vue.prototype.$youtubeApi.interceptors.request.use(
        (config) => {
            const token = localStorage['youcoders_token'] ? localStorage.getItem('youcoders_token') : null
            if (token) config.headers['Authorization'] = `Bearer ${token}`;
            return config;
        },
        (error) => Promise.reject(error)
    );
    Vue.prototype.$youtubeApi.interceptors.response.use(
        (response) => {
            console.log(response)
            return response
        },
        (error) => {
            // if (error.response.status == 401) {
            //     store.dispatch("Auth/ActionSetToken", null)
            //     localStorage.removeItem("youcoders_token");
            //     router.push({ name: "SignIn" })
            // }
            return Promise.reject(error)
        }
    );
}

Vue.use({ install })

export default { install };

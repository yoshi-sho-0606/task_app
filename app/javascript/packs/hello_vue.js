import { createApp } from "vue";
import store from './store'
import App from "../app.vue";
import router from '../router'
import axios from '../plugins/axios'

document.addEventListener("DOMContentLoaded", () => {
    const app = createApp(App);
    app.use(router);
    app.use(store);
    app.config.globalProperties.$axios = axios;
    app.mount("#app");
});
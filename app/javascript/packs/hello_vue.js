import { createApp } from "vue";
import store from './store'
import App from "../app.vue";
import router from '../router'

document.addEventListener("DOMContentLoaded", () => {
    const app = createApp(App);
    app.use(router);
    app.use(store);
    app.mount("#app");
});
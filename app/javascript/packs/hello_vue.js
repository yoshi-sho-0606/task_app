import { createApp } from "vue";
import store from './store'
import { createRouter, createWebHistory } from 'vue-router';

import App from "../app.vue";
import Top from "../top.vue"
import Tasks from "../tasks.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
    { path: '/', component: Top },
    { path: '/tasks', component: Tasks}
]
});

document.addEventListener("DOMContentLoaded", () => {
    const app = createApp(App);
    app.use(router);
    app.use(store);
    app.mount("#app");
});
import { createApp } from "vue";
import "./style.css";
import { createPinia } from 'pinia';
import App from "./App.vue";
import router from "./router/index";

import axios from 'axios';
import VueAxios from 'vue-axios';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");

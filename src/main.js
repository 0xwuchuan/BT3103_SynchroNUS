import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./index.css";
import "./nicepage.css";
// import firebase and create firebase.js

createApp(App).use(router).mount("#app");

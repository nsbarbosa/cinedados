import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { makeServer } from "./server/mirage";
import "bulma/css/bulma.min.css";
import { fetchData } from "./services/ApiService";

makeServer();

fetchData();

createApp(App).use(store).use(router).mount("#app");

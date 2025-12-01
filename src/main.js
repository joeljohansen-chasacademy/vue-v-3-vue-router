import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router"; // Importera routern

const app = createApp(App);

// Använd routern i appen
app.use(router);

app.mount("#app");

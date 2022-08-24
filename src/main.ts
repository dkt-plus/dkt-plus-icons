import { createApp } from "vue";
import App from "./App.vue";

import * as DktPlusIconsVue from "@dkt-plus/icons-vue";
const app = createApp(App);
console.log(DktPlusIconsVue);
for (const [key, component] of Object.entries(DktPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");

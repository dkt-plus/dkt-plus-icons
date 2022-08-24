import { createApp } from "vue";
import App from "./App.vue";

import * as DktPlusIconsVue from "../packages/vue";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);
console.log(DktPlusIconsVue);
for (const [key, component] of Object.entries(DktPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");

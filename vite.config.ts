/*
 * @Author: Nio
 * @Date: 2022-08-19 16:33:27
 * @Description:
 * @FilePath: /dkt-plus-icons/vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
});

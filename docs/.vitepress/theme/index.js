import DefaultTheme from "vitepress/theme";
import { watch } from "vue";
import Layout from "./Layout.vue";
import "./main.scss";

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ router }) {
    watch(
      () => router.route.path,
      (path) => {
        const _path = localStorage.getItem("URL_PATH", path);
        if (_path !== path) {
          localStorage.setItem("URL_PATH", path);
          window.location.reload();
        }
      }
    );
  },
};

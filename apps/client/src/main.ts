import { createSSRApp } from "vue";
import App from "./App.vue";
import i18next from "i18next";
import I18NextVue from "i18next-vue";
import commonEn from "./locales/en/common.json";
import commonZh from "./locales/zh/common.json";

type TLng = "en" | "zh";
type TNS = "common";

const resources: Record<TLng, Record<TNS, Record<string, string>>> = {
  en: { common: commonEn },
  zh: { common: commonZh },
};

export function createApp() {
  i18next.init(
    {
      resources,
      lng: "zh",
      debug: true,
      fallbackLng: "zh",
      keySeparator: ".",
      interpolation: {
        escapeValue: false,
      },
      ns: ["common"],
      defaultNS: "common",
      fallbackNS: "common",
      backend: {
        loadPath: "./locales/{{lng}}/{{ns}}.json",
      },
    },
    (err) => {
      if (err) {
        console.log(err);
      }
    },
  );

  const app = createSSRApp(App);
  app.use(I18NextVue, { i18next });
  // .mount('#app');

  return {
    app,
  };
}

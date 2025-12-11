import { createSSRApp } from "vue";
import App from "./App.vue";
import i18next from "i18next";
import I18NextVue from "i18next-vue";
import enCommon from './locales/en/common.json'
import zhCommon from './locales/zh/common.json'

const resources = {
  en: { messages: enCommon },
  zh: { messages: zhCommon },
}

export function createApp() {

  i18next.init({
    resources,
    lng: "en",
    fallbackLng: "en",
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: 'common',
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
    },
  });

  const app = createSSRApp(App);
  app.use(I18NextVue, { i18next })
    // .mount('#app');
  return {
    app,
  };
}

import dayjs from 'dayjs';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
    },
    lng: 'en',
    fallbackLng: 'en',
  })
  .catch((r) => console.error(r));

dayjs.locale('en');

export type TranslateFunction = typeof i18n['t'];

export default i18n;

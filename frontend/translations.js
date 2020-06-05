import { addLocales, setLocale } from 'react-i18nify';
// import ja from 'date-fns/locale/ja';
// import en from 'date-fns/locale/en-US';

const translationsObj = {
    en: {
        application: {
          login: 'Log In',
          signup: 'Sign Up'
        },
    },
      ja: {
        application: {
          login: 'ログイン',
          signup: '新規登録'
        },
      }
};

// setTranslations({
 
// });

// setLocale('en-US');

// addLocales({
//     ja: ja,
//     en: en,
//   });

export default translationsObj;
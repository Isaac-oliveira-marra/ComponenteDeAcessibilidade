import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
// import { initReactI18next } from "react-i18next"
// import PTBR from '../src/Components/Translate/locales/pt/global.json'
// import ENUS from '../src/Components/Translate/locales/en/global.json'
import  i18n  from "i18next"

// const resources = {
//   'pt-BR': PTBR,
//   'en-us': ENUS
// }

// i18n.use(initReactI18next).init({
//   resources,
//   lng: navigator.language,
//   interpolation: {
//       escapeValue: false,
//   }
// })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <I18nextProvider i18n={i18next}> */}
      <App />
    {/* </I18nextProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

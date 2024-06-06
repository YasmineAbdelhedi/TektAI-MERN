import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";

import "./styles/bootstrap.min.css";
import "./styles/animate.min.css";
import "./styles/fontawesome-all.min.css";
import "./styles/swiper-bundle.min.css";
import "./styles/default.css";
import "./styles/aos.css";
import "./styles/global.css";
import "./styles/responsive.css";
import './i18n';
import { GoogleOAuthProvider} from '@react-oauth/google';
// import i18next from 'i18next';

// i18next.init({
//   lng: 'en',
//   debug: true,
//   resources: {
//     en: {
//       translation: {
//         "key": "hello world"
//       }
//     }
//   }
// });

// document.getElementById('output').innerHTML = i18next.t('key');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={'860737827366-k9puenglbdmb2k53vfbcbh9vgmvc0utg.apps.googleusercontent.com'} >
  <BrowserRouter>
    <App />
  </BrowserRouter>
</GoogleOAuthProvider>

);

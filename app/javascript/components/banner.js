// app/javascript/components/banner.js
import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Media and marketing with technical skills", "Yes", "That is a thing"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
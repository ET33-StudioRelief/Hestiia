import './index.css';

import { swiperBlog, swiperJoin } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperBlog();
  swiperJoin();
});

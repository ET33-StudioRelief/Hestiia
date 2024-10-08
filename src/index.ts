import './index.css';

import { swiperBlog, swiperJoin, swiperTestimonial } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperBlog();
  swiperJoin();
  swiperTestimonial();
});

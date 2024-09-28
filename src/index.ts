import './index.css';

import { greetUser } from '$utils/greet';
import { swiperBlog, swiperJoin, swiperTestimonial } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Hestiia';
  greetUser(name);
  swiperBlog();
  swiperJoin();
  swiperTestimonial();
});

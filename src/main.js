import Vue from 'vue';
import Scroll from 'vue-scrollto';
import 'aos/dist/aos.css';
import 'bulma/css/bulma.css';
import App from './App';
import './css/main.css';

Vue.use(Scroll, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});

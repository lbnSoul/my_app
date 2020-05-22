import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import myAppCommon from "@/utils/myAppCommon"
import _ from "lodash";
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(MuseUI);
Vue.use(myAppCommon)
Vue.config.productionTip = false;
Vue.prototype._ = _;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

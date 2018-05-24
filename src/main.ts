import Vue from "vue";
import App from "./App.vue";
//import ApiService from "./common/api.service";
import VueInject from "./ioc/index";

Vue.config.productionTip = false;

//ApiService.init();

Vue.use(VueInject);

new Vue({
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";

import Vuex from "vuex";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import VueSocketio from "vue-socket.io-extended";
import io from "socket.io-client";

import App from "./components/App.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.config.debug = true;

Vue.use(Vuex);
Vue.use(Vuetify);

// websockets configuration
const wsPort = 3000;
const wsServer = "localhost";

Vue.use(VueSocketio, io(wsServer + ":" + wsPort), store);

var vm = new Vue({
  render: h => h(App),
  store
}).$mount("#app");

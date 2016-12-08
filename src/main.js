// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: true,
  template: '<App/>',
  components: { App },
}).use(Vuex);

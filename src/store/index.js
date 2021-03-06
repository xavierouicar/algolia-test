import Vue from 'vue';
import Vuex from 'vuex';
import search from './modules/search';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    search,
  },
});

export default store;

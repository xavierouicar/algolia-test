export default {
  mutations: {
    updateResults(state, payload) {
      state.results = payload;
    },
  },
  getters: {
    allResults: state => state.results,
  },
  state: {
    results: [],
  },
};

export default {
  actions: {
    resultsChanged(context, payload) {
      context.commit('updateResults', payload);
    },
  },
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

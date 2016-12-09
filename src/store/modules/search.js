import algoliasearch from 'algoliasearch';

export default {
  actions: {
    changeDate({ commit, state, dispatch, getters }, payload) {
      commit('changeDate', payload);
      if (getters.searchable) {
        dispatch('search');
      }
    },
    changePeriod({ commit, state, dispatch, getters }, payload) {
      commit('changePeriod', payload);
      if (getters.searchable) {
        dispatch('search');
      }
    },
    search({ commit, state, getters }) {
      const client = algoliasearch('06NR5QJ17D', '3e7392fe15c8e3b13cf18bc620e51974');
      const index = client.initIndex('car');
      const filtersDate = getters.filtersDate;
      index.search({
        aroundLatLng: `${state.latlng.lat},${state.latlng.lng}`,
        ...filtersDate && { filters: filtersDate },
      }, (err, content) => {
        if (!err) {
          commit('updateResults', content.hits);
        } else {
          console.alert('error');
        }
      });
    },
  },
  mutations: {
    updateResults(state, payload) {
      state.results = payload;
    },
    changeLatLng(state, latlng) {
      state.latlng = latlng;
    },
    changePeriod(state, { type, value }) {
      state.period[type] = value;
    },
    changeDate(state, { type, value }) {
      state.date[type] = value;
    },
  },
  getters: {
    searchable: state => state.date.start && state.date.end && state.latlng,
    allResults: state => state.results,
    filtersDate: (state) => {
      if (state.date.start && state.date.end) {
        const startDate = parseInt(state.date.start.replace(/-/g, ''), 10);
        const endDate = parseInt(state.date.end.replace(/-/g, ''), 10);
        const filtersArray = [];
        for (let i = startDate; i <= endDate; i += 1) {
          if (i === startDate) {
            if (state.period.start) {
              filtersArray.push((i * 10) + 1);
            }
            filtersArray.push((i * 10) + 2);
          } else if (i === endDate) {
            filtersArray.push((i * 10) + 1);
            if (!state.period.end) {
              filtersArray.push((i * 10) + 2);
            }
          } else {
            filtersArray.push((i * 10) + 1);
            filtersArray.push((i * 10) + 2);
          }
        }
        const filtersString = filtersArray.map(filter => `availabilities = ${filter}`).join(' AND ');
        return filtersString;
      }
      return null;
    },
  },
  state: {
    results: [],
    latlng: null,
    period: {
      start: true,
      end: true,
    },
    date: {
      start: null,
      end: null,
    },
  },
};

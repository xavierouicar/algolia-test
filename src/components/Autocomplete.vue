<template>
  <div class="autocomplete">
    <input type="search" placeholder="Where are we going?" v-algolia-places/>
  </div>
</template>

<script>

import places from 'places.js';
import store from '../store';

export default {
  name: 'autocomplete',
  directives: {
    'algolia-places': {
      // When the bound element is inserted into the DOM...
      inserted(el) {
        const autocomplete = places({
          container: el,
        });
        autocomplete.on('change', (e) => {
          const latlng = e.suggestion.latlng;
          store.commit('changeLatLng', latlng);
          store.dispatch('search');
        });
      },
    },
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

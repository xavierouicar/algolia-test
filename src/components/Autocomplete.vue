<template>
  <div class="autocomplete">
    <input type="search" placeholder="Where are we going?" v-algolia-places/>
  </div>
</template>

<script>

import places from 'places.js';
import Vue from 'vue';
import algoliasearch from 'algoliasearch';

Vue.directive('algolia-places', {
  // When the bound element is inserted into the DOM...
  inserted(el) {
    const autocomplete = places({
      container: el,
    });
    autocomplete.on('change', (e) => {
      const latlng = e.suggestion.latlng;
      const client = algoliasearch('06NR5QJ17D', '3e7392fe15c8e3b13cf18bc620e51974');
      const index = client.initIndex('car');
      index.search({
        aroundLatLng: `${latlng.lat},${latlng.lng}`,
      }, (err, content) => {
        console.log(err, content);
      });
    });
  },
});

export default {
  name: 'autocomplete',
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

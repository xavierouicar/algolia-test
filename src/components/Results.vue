<template>
  <div class="results">
    <ul>
      <li v-for="result in results">
        <car :data="result" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import car from './Car';

export default {
  name: 'results',
  computed: mapGetters({
    results: 'allResults',
  }),
  components: {
    car,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

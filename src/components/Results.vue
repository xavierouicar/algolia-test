<template>
  <div class="results columns is-multiline">
    <div v-for="result in results" class="column">
      <car :data="result" />
    </div>
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
	.results {
		margin: auto;
		margin-top: 20px;
	}
</style>

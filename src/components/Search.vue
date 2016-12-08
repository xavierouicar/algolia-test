<template>
  <div class="search">
    <autocomplete />
    <results />
  </div>
</template>

<script>
import autocomplete from './Autocomplete';
import results from './Results';

export default {
  name: 'search',
  components: {
    autocomplete,
    results,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

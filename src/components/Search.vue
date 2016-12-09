<template>
  <div class="search">
    <autocomplete />
    <datepickers />
    <results />
  </div>
</template>

<script>
import VbSwitch from 'vue-bulma-switch';
import autocomplete from './Autocomplete';
import results from './Results';
import datepickers from './Datepickers';

export default {
  name: 'search',
  components: {
    autocomplete,
    datepickers,
    results,
    VbSwitch,
  },
  data() {
    return {
      start_period: false,
      end_period: false,
      end_period_text: '',
      start_period_text: '',
    };
  },
  watch: {
    start_period(value) {
      this.start_period_text = value ? 'Matin' : 'Après-midi';
    },
    end_period(value) {
      this.end_period_text = value ? 'Matin' : 'Après-midi';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .datefilters {
    margin: auto;
    margin-top: 20px;
    padding: 10px;
  }
</style>

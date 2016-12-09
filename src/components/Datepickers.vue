<template>
  <div class="columns datefilters">
    <div class="column is-4">
      <label>
        Début de location
      </label>
      <datepicker
        :date="startDate" :option="option" :limit="limit"
        @change="handleDateStartChange" />
    </div>
    <div class="column is-2">
      <vb-switch type="success" size="large" checked @input="startPeriodChange" />
      {{this.$store.state.search.period.start ? 'Matin' : 'Après-midi'}}
    </div>
    <div class="column is-4">
      <label>
        Fin de location
      </label>
      <datepicker
        :date="endDate" :option="option" :limit="limit"
        @change="handleDateEndChange" />
    </div>
    <div class="column is-2">
      <vb-switch type="success" size="large" checked @input="endPeriodChange" />
      {{this.$store.state.search.period.end ? 'Matin' : 'Après-midi'}}
    </div>
  </div>
</template>

<script>
import datepicker from 'vue-datepicker';
import VbSwitch from 'vue-bulma-switch';

export default {
  name: 'datepickers',
  components: {
    datepicker,
    VbSwitch,
  },
  data() {
    return {
      startDate: {
        time: '',
      },
      endDate: {
        time: '',
      },
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD',
        placeholder: 'Saisir une date',
        inputStyle: {
          display: 'inline-block',
          padding: '6px',
          'line-height': '22px',
          'font-size': '16px',
          border: '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          color: '#5F5F5F',
        },
        color: {
          header: '#ccc',
          headerText: '#f00',
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel',
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true, // as true as default
      },
      limit: [],
    };
  },
  methods: {
    handleDateStartChange(value) {
      this.$store.dispatch('changeDate', { type: 'start', value });
    },
    handleDateEndChange(value) {
      this.$store.dispatch('changeDate', { type: 'end', value });
    },
    startPeriodChange(value) {
      this.$store.dispatch('changePeriod', { type: 'start', value });
    },
    endPeriodChange(value) {
      this.$store.dispatch('changePeriod', { type: 'end', value });
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

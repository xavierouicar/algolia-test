<template>
  <div id="app">
    <search />
  </div>
</template>

<script>
import 'bulma/css/bulma.css';
import Search from './components/Search';

export default {
  name: 'app',
  components: {
    Search,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px
}
</style>

<template>
  <div class="car">
    <span>
      <span>{{data.owner.firstname}} {{data.owner.lastname}}</span>
      <img v-if="data.owner.media && data.owner.media != '0'" :src="`https://docker.ouicar.fr/media/${data.owner.media}-thumb`" />
    </span>
    <span>
      <img v-if="data.media && data.media != '0'" :src="`https://docker.ouicar.fr/media/${data.media}-caruser`" />
      <span>
        <div>{{data.constructor}}</div>
        <div>{{data.model}}</div>
        <div>{{data.prive_avg}}</div>
      </span>
    </span>
  </div>
</template>

<script>

export default {
  name: 'car',
  props: ['data'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

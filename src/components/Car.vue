<template>
  <div class="car">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img v-if="data.media && data.media != '0'" :src="`https://docker.ouicar.fr/media/${data.media}-product`" />
          <img v-if="!data.media || data.media == '0'" src="https://docker.ouicar.fr/static/v2/img/_car/car-empty-1230x850.png" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-32x32">
              <img v-if="data.owner.media && data.owner.media != '0'" :src="`https://docker.ouicar.fr/media/${data.owner.media}-thumb`" />
              <img v-if="!data.owner.media || data.owner.media == '0'" src="https://docker.ouicar.fr/static/v2/img/user/no-avatar-unknown.png" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-5">{{data.owner.firstname}} {{data.owner.lastname}}</p>
            <p v-if="data.location" class="subtitle is-6">
              {{data.location.locality}}, {{data.location.postal_code}}
            </p>
          </div>
        </div>
        <div class="content">
          {{data.constructor}} {{data.model}}
          <br>
          <small>{{data.prive_avg}}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rating from 'vue-bulma-rating';

export default {
  name: 'car',
  components: {
    rating,
  },
  props: ['data'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    margin: auto;
  }
</style>

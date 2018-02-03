<template>
  <div>
    <div class="launch" v-for="launch in allLaunches" :key="launch.flight_number">
      <span>{{launch.flight_number}}.</span>
      <span>{{launch.rocket.rocket_name}}</span>
      <div>{{launch.details}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'launches',
  computed: {
    allLaunches () {
      return this.$store.getters.allLaunches
    }
  },
  beforeMount () {
    this.$store.dispatch('FETCH_LAUNCHES')
  }
}
</script>

<style>
.launch {
  margin: 5px;
  padding: 5px;
  border: solid 1px black;
  border-radius: 3px;
}
</style>

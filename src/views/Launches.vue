<template>
  <div>
    <div class="launch" v-for="launch in orderedLaunches" :key="launch.flight_number">
      <span>{{launch.flight_number}}.</span>
      <span>{{launch.rocket.rocket_name}}</span>
      <div>{{launch.details}}</div>
      <router-link :to="goToLaunch(launch)">Read more</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'launches',
  methods: {
    goToLaunch (launch) {
      return {
        name: 'launch',
        params: {
          flight: launch.flight_number
        }
      }
    }
  },
  computed: {
    ...mapGetters({ getLaunches: 'launches/getAllLaunches' }),
    orderedLaunches () {
      return [...this.getLaunches].sort((a, b) =>
        b.flight_number - a.flight_number
      )
    }
  },
  created () {
    this.$store.dispatch('launches/FETCH_LAUNCHES')
  }
}
</script>

<style lang="scss">
.launch {
  margin: 5px;
  padding: 5px;
  border: solid 1px black;
  border-radius: 3px;
}
</style>

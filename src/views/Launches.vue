<template>
  <div class="launches">
    <launch-item v-for="launch in orderedLaunches" :launch="launch" :key="launch.flight_number">
      <router-link slot="link" :to="goToLaunch(launch)">Read more</router-link>
    </launch-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LaunchItem from '@/components/LaunchItem'

export default {
  name: 'launches',
  components: {
    LaunchItem
  },
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

<style lang="scss" scoped>
  .launches {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px 5px;

    @media (min-width: 900px) {
      grid-template-columns: repeat(8, 1fr);
    }
  }

  .launch-item {

  }
</style>


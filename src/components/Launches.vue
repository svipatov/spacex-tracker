<template>
  <div class="launches">
    <launches-item v-for="launch in launches" :launch="launch" :key="launch.flight_number">
      <router-link slot="link" :to="goToLaunch(launch)">Read more</router-link>
    </launches-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LaunchesItem from '@/components/LaunchesItem'

export default {
  props: ['launches'],
  name: 'launches',
  components: {
    LaunchesItem
  },
  methods: {
    goToLaunch (launch) {
      return {
        name: 'launch',
        params: {
          flight: launch.id
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
  }
}
</script>

<style lang="scss" scoped>
  .launches {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 5px;

    @media (min-width: 720px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>


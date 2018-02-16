<template>
  <div class="launches">
    <launch-card v-for="launch in orderedLaunches" :launch="launch" :key="launch.flight_number">
      <router-link class="router-link" slot="link" :to="goToLaunch(launch)">Read more</router-link>
    </launch-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LaunchCard from '@/components/LaunchCard/LaunchCard'

export default {
  name: 'Launches',
  components: {
    LaunchCard
  },
  props: {
    type: {
      type: String,
      default: 'past'
    }
  },
  computed: {
    ...mapGetters({ getPastLaunches: 'launches/getPast', getUpcomingLaunches: 'launches/getUpcoming' }),
    orderedLaunches () {
      const launches = this.type === 'past' ? this.getPastLaunches : this.getUpcomingLaunches
      return [...launches].sort((a, b) =>
        b.id - a.id
      )
    }
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
  mounted () {
    if (this.type === 'past') {
      return this.$store.dispatch('launches/FETCH_PAST')
    }
    return this.$store.dispatch('launches/FETCH_UPCOMING')
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


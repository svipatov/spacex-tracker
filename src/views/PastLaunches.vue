<template>
  <launches :launches="orderedLaunches"></launches>
</template>

<script>
import { mapGetters } from 'vuex'
import Launches from '@/components/Launches'

export default {
  name: 'past-launches',
  components: {
    Launches
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
    this.$store.dispatch('launches/FETCH_PAST')
  }
}
</script>

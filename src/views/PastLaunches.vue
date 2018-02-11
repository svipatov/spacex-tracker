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
    ...mapGetters({ getLaunches: 'launches/getPast' }),
    orderedLaunches () {
      return [...this.getLaunches].sort((a, b) =>
        b.id - a.id
      )
    }
  },
  created () {
    this.$store.dispatch('launches/FETCH_PAST')
  }
}
</script>

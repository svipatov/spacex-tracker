<template>
  <launches-list :launches="orderedLaunches"></launches-list>
</template>

<script>
import { mapGetters } from 'vuex'
import LaunchesList from '@/components/LaunchesList'

export default {
  name: 'upcoming-launches',
  components: {
    LaunchesList
  },
  computed: {
    ...mapGetters({ getLaunches: 'launches/getUpcoming' }),
    orderedLaunches () {
      return [...this.getLaunches].sort((a, b) =>
        b.id - a.id
      )
    }
  },
  created () {
    this.$store.dispatch('launches/FETCH_UPCOMING')
  }
}
</script>


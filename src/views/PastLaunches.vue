<template>
  <launches-list :launches="orderedLaunches"></launches-list>
</template>

<script>
import { mapGetters } from 'vuex'
import LaunchesList from '@/components/LaunchesList'

export default {
  name: 'past-launches',
  components: {
    LaunchesList
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

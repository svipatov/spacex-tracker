<template>
  <div>
    <launch-details v-if="launch" :launch="launch"></launch-details>
    <div v-if="!launch">
      <p>There's no information for this launch!</p>
      <router-link to="past">Read more</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import LaunchDetails from '@/components/LaunchDetails/LaunchDetails'

export default {
  data () {
    return { missingLaunch: false }
  },
  props: ['flight'],
  name: 'launch',
  components: {
    LaunchDetails
  },
  computed: {
    launch () {
      return this.$store.getters['launches/getLaunch'](this.flight)
    }
  },
  methods: {
    ...mapActions({
      fetchLaunch: 'launches/FETCH_LAUNCH'
    })
  },
  mounted () {
    if (!this.launch && this.flight) {
      this.fetchLaunch(this.flight)
    }
  }
}
</script>

<template>
  <div class="launch">
    <div class="card card--full">
      <div class="details">
        <span class="identifier">{{ launch.id }}</span>
        <span v-if="launch.rocket" class="name">{{ launch.rocket.name }}</span>
        <div class="date">{{ date }}</div>
        <div class="info">{{ launch.details }}</div>
      </div>
      <div class="more-details">
        <slot name="link"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { americanDate } from '@/helpers/date'

export default {
  name: 'LaunchCard',
  props: {
    /**
    * The launch object containing all the information
    **/
    launch: {
      type: Object,
      required: true
    }
  },
  computed: {
    date () {
      if (this.launch.date) {
        return americanDate(this.launch.date)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.launch {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.name {
  font-size: 18px;
}

.date {
  padding: 4px 0 8px;
  font-size: 14px;
  color: grey;
}

.details {
  position: relative;
  height: 100%;
  padding: 5px;
}

.identifier {
  position: absolute;
  top: 0;
  left: 0;

  border-radius: 0 0 2px 0;
  padding: 3px 10px;

  box-shadow: 
      0 2px 2px 0 rgba(0,0,0,.14),
      0 3px 1px -2px rgba(0,0,0,.2), 
      0 1px 5px 0 rgba(0,0,0,.12);
  color: white;
  background-color: #35495e;
}

.info {
  padding: 14px 8px;
}

.more-details:not(:empty) {
  padding: 5px;
  background-color: #35495e;
}
</style>

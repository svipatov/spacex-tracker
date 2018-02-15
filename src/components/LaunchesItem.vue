<template>
  <div class="launch">
    <div class="details">
      <span class="identifier">{{ launch.id }}</span>
      <span class="name">{{ launch.rocket.name }}</span>
      <div class="date">{{ date }}</div>
      <div class="info">{{ launch.details }}</div>
    </div>
    <div class="more-details">
      <slot name="link"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['launch'],
  computed: {
    date () {
      const date = this.launch.date
      const month = date.getMonth() + 1
      const day = date.getDay()
      const formatedMonth = month > 10 ? month : '0' + month
      const formatedDay = day > 10 ? day : '0' + day

      return `${formatedDay}-${formatedMonth}-${date.getFullYear()}`
    }
  }
}
</script>

<style lang="scss" scoped>

.launch {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid black;
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

  border-radius: 3px 3px 6px 3px;
  padding: 3px 10px;

  color: white;
  background-color: #35495e;
}

.info {
  border-bottom: 1px solid black;
  padding: 14px 8px;
}

.more-details {
  border-bottom: 1px solid black;  
  padding: 5px;
}
</style>

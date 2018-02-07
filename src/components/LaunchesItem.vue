<template>
  <div class="launch">
    <div class="launch__details">
      <span>{{launch.flight_number}}.</span>
      <span>{{launch.rocket.rocket_name}}</span>
      <div class="launch-info">{{launch.details}}</div>
    </div>
    <div class="launch__more-details">
      <slot name="link"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['launch']
}
</script>

<style lang="scss" scoped>
	.launch {
    display: flex;
    flex-direction: column;
		border: solid 1px black;
    border-radius: 3px;

    &__details {
      height: 100%;
      padding: 5px;
    }
    
    &__more-details {
      border-top: 1px solid black;
      padding: 5px;
    }
	}
</style>

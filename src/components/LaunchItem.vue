<template>
  <div class="launch">
    <span>{{launch.flight_number}}.</span>
    <span>{{launch.rocket.rocket_name}}</span>
    <div>{{launch.details}}</div>
    <slot name="link"></slot>
  </div>
</template>

<script>
export default {
  props: ['launch']
}
</script>

<style lang="scss" scoped>
	.launch {
		margin: 5px;
		padding: 5px;
		border: solid 1px black;
		border-radius: 3px;
	}
</style>

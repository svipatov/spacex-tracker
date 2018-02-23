<template functional>
  <nav>
    <router-link class="router-link link" v-for="item in items" :key="item.url" :to="item.url">
      {{item.label}}
    </router-link>
  </nav>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  width: 100%;
  padding: 0 8px;
}

.link {
  padding: 0 8px;
  text-transform: uppercase;
  font-size: 13px;
}
</style>


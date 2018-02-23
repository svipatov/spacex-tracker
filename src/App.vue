<template>
  <div id="app">
    <navigation-bar title="SpaceX">
      <div slot="links">
        <router-link class="router-link link" to="/launches">Launches</router-link>
        <router-link class="router-link link" to="/rockets">Rockets</router-link>
      </div>
      <router-view slot="view" name="subBar"/>
    </navigation-bar>

    <main>
      <router-view :key="$route.fullPath"></router-view>
    </main>

    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'app',
  components: {
    NavigationBar,
    FooterBar
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  display: grid;
  position: relative;
  height: 100%;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ededed;
}

main {
  grid-area: main;
  margin: 20px 5px;
}
</style>

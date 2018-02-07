<template>
  <div id="app">
    <navigation-bar></navigation-bar>

    <main>
      <router-view :key="$route.fullPath"></router-view>
    </main>

    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
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
  grid-template-columns: 1fr;
  grid-template-areas:
  "header"
  "main"
  "footer";
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  grid-area: main;
  margin: 40px 5px 0 5px;

  text-align: center;
}
</style>

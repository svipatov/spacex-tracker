<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Search</router-link>
    </div>
    <button @click="askPermission">Login with Spotify</button>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Vue } from 'vue-property-decorator';
  // import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  @Component({
    components: {},
  })
  export default class App extends Vue {
    private askPermission() {
      // console.log(this.$store.state.test);
    }
  }
</script>

<style>

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-active {
  color: #42b983;
}
</style>

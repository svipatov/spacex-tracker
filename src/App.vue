<template>
  <div id="app">
    <header>
      <span>SpaceX</span>
      <nav>
        <router-link class="link" to="/">Launches</router-link>
      </nav>
    </header>

    <main>
      <router-view :key="$route.fullPath"></router-view>
    </main>

    <aside>
      <ul>
        <li>Cenas 1</li>
        <li>Cenas 1</li>
        <li>Cenas 1</li>
        <li>Cenas 1</li>
        <li>Cenas 1</li>
      </ul>
    </aside>

    <footer>
      Footer Cenas
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
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

  @media only screen and (min-width: 720px) {
    grid-template-columns: auto 1fr;
    grid-template-areas:
    "header header"
    "aside main"
    "footer footer";
  }
}

header {
  display: flex;
  grid-area: header;
  align-items: center;
  
  margin: 0;
  padding: 0 16px 0 24px;

  height: 56px;
  background-color: #35495E;

  color: #ffffff;
  justify-content: space-between;
}

main {
  grid-area: main;
  margin-top: 40px;

  text-align: center;
}

aside {
  display: none;
  grid-area: aside;
  
  @media only screen and (min-width: 720px) {
    display: block;
  }
}

footer {
  grid-area: footer;
}

.link {
  color: white;
  text-decoration: none;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
}
</style>

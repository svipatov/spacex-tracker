<template>
  <header class="header">
    <div class="main">
      <span class="title">SpaceX</span>
      <nav class="navigation">
        <router-link class="router-link router-link--big link" to="/launches">Launches</router-link>
        <router-link class="router-link router-link--big link" to="/rockets">Rockets</router-link>
      </nav>
    </div>
    <router-view name="subBar"/>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/_colors.scss";

.header {
  grid-area: header;
  align-items: center;
  flex-direction: column;
  position: sticky;

  top: 0;
  margin: 0;

  background-color: #35495e;
  box-shadow: 
    0 2px 2px 0 rgba(0,0,0,.14),
    0 3px 1px -2px rgba(0,0,0,.2), 
    0 1px 5px 0 rgba(0,0,0,.12);

  color: #ffffff;
  justify-content: space-between;

  z-index: 2;
}

.main {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
}

.title {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
}

.link {
  margin: 0 8px;
}
</style>


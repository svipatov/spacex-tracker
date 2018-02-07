<template>
  <div>
    <router-link to="/launches/upcoming">Upcoming</router-link>
    <router-link to="/launches/past">Past</router-link>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

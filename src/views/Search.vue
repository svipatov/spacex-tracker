<template>
  <div class="search">
    <input class="searcher" type="text" v-model="searchTerm" placeholder="Search for something music related..."/>
    <div class="progress" v-if="!!searchTerm">
      <span class="progress__message">Searching {{searchLoading}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Model, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {},
})
export default class Search extends Vue {
  private searchTerm: string = '';

  get searchLoading() {
    return this.searchTerm + '...';
  }
}
</script>

<style lang="scss" scoped>

.searcher {
  padding: 5px;
  outline: 0;
  border: 0;
  border-radius: 3px;
  width: 100%;
  height: 30px;
  box-shadow: inset 0 0 3px black;
  background-color: rgb(252, 252, 252);
}

</style>
<template>
  <div id="app">
    <beer-detail :beer='selectedBeer'></beer-detail>
    <beer-list :beers='beers'></beer-list>

      </div>
</template>

<script>
import {eventBus} from '@/main.js'
import BeerListItem from './components/BeerListItem.vue'
import BeerList from './components/BeerList.vue'
import BeerDetail from './components/BeerDetail.vue'

export default {
    name: 'app',
    data(){
      return {
        beers: [],
        selectedBeer: null
      }
    },

    mounted(){
      fetch("https://api.punkapi.com/v2/beers")
      .then(response => response.json())
      .then(beers => this.beers = beers)

      eventBus.$on('beer-selected', (beer) => {
        this.selectedBeer = beer

      })
    },

    components: {
      "beer-list": BeerList,
      "beer-list-item": BeerListItem,
      "beer-detail": BeerDetail
    }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template lang="html">
<div >
 <h1> Favourite Beers</h1>
  <beer-list :beers="favouriteBeers" :favouriteBeers="favouriteBeers"></beer-list>


</div>
</template>



<script>
import {eventBus} from '../main.js'
import BeerList from '../components/BeerList.vue'


export default {
  name:'favouriteBeers',
  props: ['favouriteBeers'],

  components: {
    'beer-list': BeerList
  }



  }



</script>

<style lang="css" scoped>
</style>

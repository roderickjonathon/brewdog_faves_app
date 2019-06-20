<template lang="html">
  <div id="beer-list">
    <beer-list-item v-for='(beer, index) in beers' :beer='beer' :key="index"></beer-list-item>

  </div>

</template>



<script>

import BeerListItem from './BeerListItem.vue'

export default {
  name:'beer-list',
  props:['beers'],

  components:{
    'beer-list-item': BeerListItem
  }
}
</script>

<style lang="css" scoped>
</style>

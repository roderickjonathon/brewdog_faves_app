<template lang="html">
  <div id='beer-display' v-if='beer'>
    <ul>
      <h2>{{beer.name}}</h2>
      <ul>{{beer.description}}</ul>
      <ul>This beer was first created on {{beer.first_brewed}}</ul>
      <img :src="beer.image_url" alt="beer_image" width="200px" height="600px">
      <button  v-on:click='handleClick'>Add to favourites</button>
    </ul>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'beer-detail',
  props: ['beer', 'favouriteBeers'],


  methods:{
    handleClick(){
      eventBus.$emit('beer-favourited', this.beer)
  }
  }
}
</script>

<style lang="css" scoped>


</style>

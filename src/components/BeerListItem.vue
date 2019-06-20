<template lang="html">

<div id="beer-list-item">
  <p v-on:click="handleClick">{{beer.name}}</p>

</div>
</template>

<script>
import {eventBus} from '../main.js'


export default {
  name: 'beer-list-item',
  props:['beer'],

  methods:{
    handleClick(){
      eventBus.$emit('beer-selected', this.beer)
    }

  }
}
</script>

<style lang="css" scoped>
</style>

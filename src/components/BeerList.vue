<template lang="html">
  <div id="beer-list">

    <select v-on:change="handleClick" v-model="selectedBeer" >
      <option disabled value="">Select a beer...</option>
      <option :value="beer" v-for='(beer, index) in beers' :beer='beer' :key="index">{{beer.name}}</option>


    </select>

  </div>

</template>



<script>


import {eventBus} from '../main.js'

export default {
  name:'beer-list',
  props:['beers'],
  data(){
    return {

      selectedBeer: null
    }
  },


    methods:{
      handleClick(){
        eventBus.$emit('beer-selected', this.selectedBeer)
      }

    },


  components:{

  }
}
</script>

<style lang="css" scoped>
</style>

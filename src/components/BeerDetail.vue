<template lang="html">
  <div v-if='beer'>
    <ul>
      <h2>{{beer.name}}</h2>
      <ul>{{beer.description}}</ul>
      <ul>This beer was first created on {{beer.first_brewed}}</ul>

    </ul>
  </div>
</template>

<script>

export default {
  name: 'beer-detail',
  props: ['beer']
}
</script>

<style lang="css" scoped>


</style>

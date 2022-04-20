<template>
  <ul>
    <li v-for="s in subs" v-bind:class="s.type" :key="s.name">
      {{ s.name }}
      <tree-item :subs="s.subs"></tree-item>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TreeItem",
  props: [ 'subs' ]
}
</script>

<style scoped>

</style>
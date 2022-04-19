<template>
  <div id="app">
    <h2>{{ msg }}</h2>
    <child-item1 />
    <child-item2 />
    <module-item1 />
  </div>
</template>

<script>
import childItem1 from "@/components/ChildItem1";
import childItem2 from "@/components/ChildItem2";
import ModuleItem1 from "@/components/ModuleItem1";

export default {
  name: 'App',
  components: {
    ModuleItem1,
    childItem1,
    childItem2
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

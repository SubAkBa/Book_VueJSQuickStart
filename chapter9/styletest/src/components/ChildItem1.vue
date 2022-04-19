<template>
  <div class="main test">
    {{ msg }}
    <child-item11 />
    {{ msg }}
  </div>
</template>

<script>
import ChildItem11 from "@/components/ChildItem11";

export default {
  name: "ChildItem1",
  components: {
    ChildItem11
  },
  data() {
    return {
      msg: 'Child1'
    }
  },
}
</script>

<style scoped>
.main {
  border: 1px solid black;
  background-color: yellow;
}
</style>
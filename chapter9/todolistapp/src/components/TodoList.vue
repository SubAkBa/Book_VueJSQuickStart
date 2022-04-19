<template>
  <div id="todolistapp">
    <div id="header" class="header">
      <h2>Todo List APP</h2>
      <input-todo></input-todo>
    </div>
    <list-item></list-item>
  </div>
</template>

<script>
import InputTodo from "@/components/inputTodo";
import ListItem from "@/components/ListItem";

export default {
  name: "TodoList",
  components: {
    InputTodo,
    ListItem
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.header {
  background-color: purple;
  padding: 30px;
  color: yellow;
  text-align: center;
}

.header:after {
  content: '';
  display: table;
  clear: both;
}
</style>
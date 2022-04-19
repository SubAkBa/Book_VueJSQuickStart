import Vue from 'vue'
import todoList from "@/components/TodoList";

Vue.config.productionTip = false

new Vue({
  render: h => h(todoList),
}).$mount('#app')

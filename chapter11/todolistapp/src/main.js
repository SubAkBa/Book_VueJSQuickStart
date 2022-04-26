import Vue from 'vue'
import todoList from "@/components/TodoList";
import store from './store';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(todoList),
}).$mount('#app')

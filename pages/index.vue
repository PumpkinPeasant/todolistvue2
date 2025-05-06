<script>
import {defineComponent} from "vue";
import TodoItem from "~/components/todo/TodoItem.vue";
import CreateTodoPopUp from "~/components/popups/CreateTodoPopUp.vue";

export default defineComponent({
  data() {
    return {
      todoItem: {id: 1, title: "My new task", checked: false},
    }
  },
  components: {CreateTodoPopUp, TodoItem}
})
</script>

<template>
  <v-app>
    <v-window class="pa-4">
      <h1 class="text-center">My Todo List</h1>
      <div class="d-flex justify-center pa-5 ma-2">
        <todo-item :index="0" :item="todoItem"/>
      </div>
      <div class="d-flex justify-center">
        <create-todo-pop-up/>
      </div>
    </v-window>
  </v-app>
</template>

<style scoped>

</style>
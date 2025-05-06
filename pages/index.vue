<script>
import {defineComponent} from "vue";
import TodoItem from "~/components/todo/TodoItem.vue";
import CreateTodoPopUp from "~/components/popups/CreateTodoPopUp.vue";

export default defineComponent({
  data() {
    return {
      todoItem: {id: 1, title: "My new task", checked: false, createdAt: new Date()},
    }
  },
  components: {CreateTodoPopUp, TodoItem}
})
</script>

<template>
  <v-app>
    <v-window class="pa-4">
      <h1 class="text-center mb-8">My Todo List</h1>
      <div style="max-width: 550px; align-self: center; width: 100%">
        <v-text-field
            hide-details
            outlined
            append-icon="mdi-magnify"
            label="Search..."/>
        <v-chip-group multiple>
          <v-chip
              filter
              outlined
          >
            Done
          </v-chip>
          <v-chip
              filter
              outlined
          >
            In progress
          </v-chip>
        </v-chip-group>
      </div>
      <v-divider/>
      <div class="d-flex justify-end pa-2" style="max-width: 550px; align-self: center">
        <v-btn color="red" dark v-text="'Delete completed todos'"/>
      </div>
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
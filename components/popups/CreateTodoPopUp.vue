<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CreateTodoPopUp",
  data() {
    return {
      isActive: false,
      title: "",
    }
  },
  methods: {
    createTodo() {
      console.log('create Todo')
    },
    closeDialog() {
      this.clear();
      this.isActive = false;
    },
    clear() {
      this.title = '';
    }
  }
})
</script>

<template>
  <v-dialog v-model="isActive" max-width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          v-bind="attrs"
          v-on="on"
          prepend-icon="mdi-plus"
          variant="tonal"
          size="large"
          min-width="300px">
        Create Todo
      </v-btn>
    </template>

    <template v-slot:default>
      <v-card>
        <v-card-title v-text="'Create Todo'"/>
        <v-card-text>
          <v-text-field
              @keydown.enter="createTodo"
              v-model="title"
              label="Enter todo title"
              outlined/>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              v-text="'Close'"
              @click="closeDialog"/>
          <v-btn
              color="primary"
              v-text="'Save'"/>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>
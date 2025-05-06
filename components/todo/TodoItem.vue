<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TodoItem",
  props: {
    item: {
      type: Object,
    },
    index: {
      type: Number,
    }
  },
  data() {
    return {
      isEditActive: false,
      newTitle: '',
    }
  },
  methods: {
    checkItem(id, checked) {
      console.log('create Todo')
    },
    saveChanges(id, title) {

    },
    toggleEdit() {
      this.isEditActive = !this.isEditActive;
      this.newTitle = this.isEditActive ? this.item.title : '';
    },
    deleteItem(id) {

    }
  },

})
</script>

<template>
  <div class="d-flex align-center mb-3" style="gap: 8px">
    <v-chip rounded variant="text">{{ index + 1 }}</v-chip>
    <v-card
        min-width="400px"
        class="d-flex justify-space-between align-center pa-2">
      <v-card-title v-if="!isEditActive">
        {{ item.title }}
      </v-card-title>
      <v-text-field
          v-model="newTitle"
          v-else
          append-icon="mdi-content-save"
          class="mx-4 mt-6"
          variant="outlined"
          @click.stop/>
      <v-checkbox
          v-if="!isEditActive"
          @click.stop="checkItem(item.id, !item.checked)"
          color="primary"
          v-model="item.checked"/>
    </v-card>
    <v-btn @click="toggleEdit()" icon>
      <v-icon>{{ isEditActive ? 'mdi-undo-variant' : 'mdi-pen' }}</v-icon>
    </v-btn>
    <v-btn @click="deleteItem(item.id)" color="red" icon>
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </div>
</template>

<style scoped>

</style>
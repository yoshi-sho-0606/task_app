<template>
  <div>
    <button @click="handleCloseModal">×</button>
    <p>editModal</p>
    <label for="name">タスク名</label>
    <input type="text" id="name" v-model="task.name">
    <label for="body">内容</label>
    <textarea id="body" rows="5" v-model="task.body"></textarea>
    <button @click="handleUpdateTask(task)">更新</button>
  </div>
</template>

<script>
export default {
  name: "TaskEditModal",
  props: {
    task: {
      name: {
        type: String,
        required: true
      },
      body: {
        type: String,
        required: true
      }
    }
  },
  methods: {
    handleCloseModal: function(){
      this.$emit('close-modal')
    },
    handleUpdateTask: function(){
      this.$emit('update-task', this.task)
    }
  }
}
</script>

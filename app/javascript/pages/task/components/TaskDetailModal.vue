<template>
  <div>
    <button @click="handleCloseModal">×</button>
    <h1>{{task.name}}</h1>
    <p>{{task.body}}</p>
    <button @click="handleDeleteTask(task)">削除</button>
    <button @click="handleShowEditModal(task)">編集</button>
  </div>
</template>

<script>

export default {
  name: 'TaskDetailModal',
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
    handleCloseModal(){
      this.$emit('close-modal')
    },
    handleDeleteTask(task){
      this.$emit('delete-task', task)
    },
    handleShowEditModal(task){
      this.$emit('show-edit-modal', task)
    }
  }
}
</script>

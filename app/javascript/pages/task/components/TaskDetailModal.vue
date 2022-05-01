<template>
  <div class='task-detaile-wrapper '>
    <button class='close-button' @click="handleCloseModal">×</button>
    <p class='task-status'><span class='tag'>ステータス: </span>{{task.status}}</p>
    <p class='task-name'><span class='tag'>タスク名: </span>{{task.name}}</p>
    <p class='tag'>詳細</p>
    <p class='task-body'> {{task.body}}</p>
    <div class='button-wrapper'>
      <button class='delete-button' @click="handleDeleteTask(task)">削除</button>
      <button class='show-edit-modal-button' @click="handleShowEditModal(task)">編集</button>
    </div>
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

<style scoped>
  .task-detaile-wrapper {
    width: 250px;
    height: 300px;
    margin: 0 auto;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
  }
  .tag {
    font-weight: bold;
  }
  .task-status {
    border-bottom: 1px solid black;
  }
  .task-name {
    border-bottom: 1px solid black;
  }
  .task-body {
    margin-top: -12px;
    border-top: 1px solid black;
    overflow-wrap:  break-word;
  }
  .close-button {
    color: #fff;
    background-color: rgb(41, 161, 221);
    border-radius: 100vh;
    width: 50px;
  }
  .show-edit-modal-button, .delete-button {
  color: #fff;
  background-color: rgb(41, 161, 221);
  border-radius: 100vh;
  margin-right: 5px;
  width: 100px;
  }
</style>
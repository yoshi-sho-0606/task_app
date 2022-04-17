<template>
  <div>
    <button @click="handleCloseModal">×</button>
    <p>createModal</p>
    <label for="name">タスク名</label>
    <input type="text" id="name" v-model="task.name">
    <label for="body">内容</label>
    <textarea id="body" rows="5" v-model="task.body"></textarea>
    <button @click="handleCreateTask">新規登録</button>
  </div>
</template>

<script>

export default {
  name: 'TaskCreateModal',
  data: function(){
    return {
      task: {
        name: '',
        body: ''
      }
    }
  },
  methods: {
    handleCloseModal: function(){
      this.$emit('close-modal')
    },
    handleCreateTask: function(){
      this.$emit('create-task', this.task)
    }
  }
}
</script>

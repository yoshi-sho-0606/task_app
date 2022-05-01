<template>
  <div>
    <button @click="handleCloseModal">×</button>
    <p>editModal</p>
    <label for='name'>タスク名</label>
    <input type='text' id='name' v-model="task.name">
    <label for='body'>詳細</label>
    <textarea id='body' rows='5' v-model="task.body"></textarea>
    <label for='status'>ステータス</label>
    <select id='status' v-model="task.status">
      <option value='todo'>TODO</option>
      <option value='doing'>DOING</option>
      <option value='done'>DONE</option>
    </select>
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

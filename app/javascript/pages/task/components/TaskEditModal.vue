<template>
  <div id="edit-modal">
    <button @click="handleCloseModal">閉じる</button>
    <p class="modal-title">editModal</p>
    <div class="task-element">
      <label for='name'>タスク名</label>
      <input type='text' id='name' v-model="task.name">
    </div>
    <div class="task-element">
      <label for='body'>詳細</label>
      <textarea id='body' rows='5' v-model="task.body"></textarea>
    </div>
    <div class="task-element">
      <label for='status'>ステータス</label>
      <select id='status' v-model="task.status">
        <option value='todo'>TODO</option>
        <option value='doing'>DOING</option>
        <option value='done'>DONE</option>
      </select>
    </div>
    <button class="submit-btn" @click="handleUpdateTask(task)">更新</button>
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

<style scoped>
#edit-modal {
  height: 390px;
  width: 250px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
}
.modal-title {
  border-bottom: 1px solid black;
}
label{
  display: block;
}
.task-element {
  padding-bottom: 10px;
  border-bottom: 1px solid black;
}
.submit-btn {
  margin-top: 10px;
  margin-left: 150px;
}
button {
    background-color: rgb(41, 161, 221);
    width: 100px;
    color: white;
    border-radius: 100vh;
  }
</style>


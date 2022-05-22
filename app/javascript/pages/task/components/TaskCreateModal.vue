<template>
  <div id="create-modal">
    <button class="close-btn" @click="handleCloseModal">閉じる</button>
    <p class="modal-title">タスク 新規作成</p>
    <form>
      <div class="task-element">
        <label for="name">タスク名</label>
        <input type="text" id="name" v-model="task.name">
      </div>
      <div class="task-element">
        <label for="body">詳細</label>
        <textarea id="body" rows="5" v-model="task.body"></textarea>
      </div>
      <div class="task-element">
        <label for="status">ステータス</label>
        <select id="status" v-model="task.status" class="form-control">
          <option value="todo">TODO</option>
          <option value="doing">DOING</option>
        </select>
      </div>
      <button type="button" class="submit-btn" @click="handleCreateTask">新規登録</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'TaskCreateModal',
  data: function(){
    return {
      task: {
        name: '',
        body: '',
        status: 'todo'
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
<style scoped>
#create-modal {
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
    margin-bottom: 10px;
    background-color: rgb(41, 161, 221);
    width: 100px;
    color: white;
    border-radius: 100vh;
  }
</style>

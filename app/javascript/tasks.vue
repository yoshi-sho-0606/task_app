<template>
  <div class='title'>
      <p>{{ title }}</p>
  </div>
  <div class='button-wrapper'>
    <button @click="handleShowTaskCreateModal">
      新規登録
    </button>
  </div>
  <div class='task-wrapper'>
    <TaskDetailModal v-if="isVisibleTaskDetailModal" :task="taskDetail" @close-modal="handleCloseTaskDetailModal" @delete-task="handleDeleteTask" @show-edit-modal="handleShowEditModal"/>
    <TaskCreateModal v-if="isVisibleTaskCreateModal" @close-modal="handleCloseTaskCreateModal" @create-task="handleCreateTask" />
    <TaskEditModal v-if="isVisibleTaskEditModal" :task="taskEdit" @close-modal="handleCloseTaskEditModal" @update-task="handleUpdateTask"/>
    <div class='task-container'>
      <div class='current-task'>
        <p class='task-status'>current</p>
        <div v-for='task in tasks' :key='task.id' @click="handleShowTaskDetailModal(task)" class='task-card'>
          <p class='task-name'>{{task.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskDetailModal from './pages/task/components/TaskDetailModal'
import TaskCreateModal from './pages/task/components/TaskCreateModal'
import TaskEditModal from './pages/task/components/TaskEditModal'
import { mapGetters, mapActions } from "vuex"

export default {
  components: {
    TaskDetailModal,
    TaskCreateModal,
    TaskEditModal
  },
  data: function () {
    return {
      title: "Task page!",
      taskDetail: {},
      taskEdit: {},
      isVisibleTaskDetailModal: false,
      isVisibleTaskCreateModal: false,
      isVisibleTaskEditModal: false
    }
  },
  computed: {
    ...mapGetters(['tasks'])
  },
  created: function() {
    this.fetchTasks();
  },
  methods: {
    ...mapActions([
      'fetchTasks',
      'createTask',
      'deleteTask',
      'updateTask'
    ]),
    handleShowTaskDetailModal(task){
      this.isVisibleTaskDetailModal = true;
      this.taskDetail = task;
      this.handleCloseTaskEditModal()
    },
    handleCloseTaskDetailModal(){
      this.isVisibleTaskDetailModal = false;
      this.taskDetail = {};
    },
    handleShowTaskCreateModal(){
      this.isVisibleTaskCreateModal = true;
    },
    handleCloseTaskCreateModal(){
      this.isVisibleTaskCreateModal = false;
    },
    handleShowEditModal(task){
      this.handleCloseTaskDetailModal()
      this.taskEdit = Object.assign({}, task)
      this.isVisibleTaskEditModal = true
    },
    handleCloseTaskEditModal(){
      this.isVisibleTaskEditModal = false;
      this.taskEdit = {};
    },
    async handleCreateTask(task){
      try{
        await this.createTask(task)
        this.handleCloseTaskCreateModal()
      } catch(error){
        console.log(error)
      }
    },
    async handleDeleteTask(task){
      try{
        await this.deleteTask(task)
        this.handleCloseTaskDetailModal()
      } catch(error){
        console.log(error)
      }
    },
    async handleUpdateTask(task){
      try{
        await this.updateTask(task)
        this.handleCloseTaskEditModal()
      } catch(error){
        console.log(error)
      }
    }
  },
}
</script>

<style scoped>
  .title {
    text-align: center;
    font-size: 20px;
  }
  .button-wrapper {
    margin: 0 auto;
    width: 80%;
    max-width: 1000px;
  }
  .task-wrapper {
    margin: 0 auto;
    width: 80%;
    max-width: 1000px;
    background-color: rgb(241, 245, 247);
    border-radius: 15px;
  }
  .task-container {
    padding: 10px;
  }
  .current-task {
    width: 250px;
    padding: 10px;
  }
  .task-status {
    background-color: white;
    width: 200px;
    border-radius: 15px;
    text-align: center;
    height: 30px;
  }
  .task-card{
    border: 1px solid;
    margin-top: 10px;
    width: 200px;
    height: 50px;
    color: 12px;
    border-radius: 15px;
    text-align: center;
  }
  
</style>

<template>
  <div class='task-container'>
    <p>{{ title }}</p>
    <button @click="handleShowTaskCreateModal">
      新規登録
    </button>
    <TaskDetailModal v-if="isVisibleTaskDetailModal" :task="taskDetail" @close-modal="handleCloseTaskDetailModal" @delete-task="handleDeleteTask" @show-edit-modal="handleShowEditModal"/>
    <TaskCreateModal v-if="isVisibleTaskCreateModal" @close-modal="handleCloseTaskCreateModal" @create-task="handleCreateTask" />
    <TaskEditModal v-if="isVisibleTaskEditModal" :task="taskEdit" @close-modal="handleCloseTaskEditModal" @update-task="handleUpdateTask"/>
    <router-link :to="{name: 'Top' }">Topページへ</router-link>
    <div v-for='task in tasks' :key='task.id' @click="handleShowTaskDetailModal(task)" class='task-card'>
      <p>{{task.name}}</p>
      <p>{{task.body}}</p>
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
  .task-container {
    margin: 0 auto;
    width: 80%;
    max-width: 1000px; 
  }
  .task-card{
    border: 1px solid;
    margin-top: 5px;
    width: 200px;
    height: 100px;
    color: 12px;
  }
</style>

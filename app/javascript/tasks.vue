<template>
  <div>
    <p>{{ title }}</p>
    <button @click="handleShowTaskCreateModal">
      新規登録
    </button>
    <TaskDetailModal v-if="isVisibleTaskDetailModal" :task="taskDetail" @close-modal="handleCloseTaskDetailModal" @delete-task="handleDeleteTask"/>
    <TaskCreateModal v-if="isVisibleTaskCreateModal"  @close-modal="handleCloseTaskCreateModal" @create-task="handleCreateTask"/>
    <router-link :to="{name: 'Top' }">Task一覧へ</router-link>
    <div v-for='task in tasks' :key='task.id' @click="handleShowTaskDetailModal(task)">
      <p>{{task.name}}</p>
      <p>{{task.body}}</p>
      <hr>
    </div>
  </div>
</template>

<script>
import TaskDetailModal from './pages/task/components/TaskDetailModal'
import TaskCreateModal from './pages/task/components/TaskCreateModal'
import { mapGetters, mapActions } from "vuex"

export default {
  components: {
    TaskDetailModal,
    TaskCreateModal,
  },
  data: function () {
    return {
      title: "Task page!",
      taskDetail: {},
      isVisibleTaskDetailModal: false,
      isVisibleTaskCreateModal: false
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
      'deleteTask'
    ]),
    handleShowTaskDetailModal(task){
      this.isVisibleTaskDetailModal = true;
      this.taskDetail = task
    },
    handleCloseTaskDetailModal() {
      this.isVisibleTaskDetailModal = false;
      this.taskDetail = {};
    },
    handleShowTaskCreateModal(){
      this.isVisibleTaskCreateModal = true;
    },
    handleCloseTaskCreateModal() {
      this.isVisibleTaskCreateModal = false;
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
    }
  },
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>

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
    <TaskDetailModal 
      v-if="isVisibleTaskDetailModal" 
      :task="taskDetail" 
      @close-modal="handleCloseTaskDetailModal" 
      @delete-task="handleDeleteTask"
      @show-edit-modal="handleShowEditModal"
    />
    <TaskCreateModal 
      v-if="isVisibleTaskCreateModal" 
      @close-modal="handleCloseTaskCreateModal" 
      @create-task="handleCreateTask"
    />
    <TaskEditModal 
      v-if="isVisibleTaskEditModal"
      :task="taskEdit" 
      @close-modal="handleCloseTaskEditModal" 
      @update-task="handleUpdateTask"
    />
    <div class='list-wrapper'>
      <div>
        <TaskList 
          :tasks='todoTasks'
          taskListId="todo"
          @handleShowTaskDetailModal="handleShowTaskDetailModal"
        />
      </div>
      <div>
        <TaskList
          :tasks='doingTasks'
          taskListId="doing"
          @handleShowTaskDetailModal="handleShowTaskDetailModal"
        />
      </div>
      <div>
        <TaskList
          :tasks='doneTasks'
          taskListId="done"
          @handleShowTaskDetailModal="handleShowTaskDetailModal"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TaskDetailModal from './pages/task/components/TaskDetailModal'
import TaskCreateModal from './pages/task/components/TaskCreateModal'
import TaskEditModal from './pages/task/components/TaskEditModal'
import TaskList from './pages/task/components/TaskList'
import { mapGetters, mapActions } from "vuex"

export default {
  components: {
    TaskDetailModal,
    TaskCreateModal,
    TaskEditModal,
    TaskList
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
    ...mapGetters(['tasks']),
    todoTasks: function() {
      return this.tasks.filter(task => {
        return task.status == 'todo'
      })
    },
    doingTasks: function() {
      return this.tasks.filter(task => {
        return task.status == 'doing'
      })
    },
    doneTasks: function() {
      return this.tasks.filter(task => {
        return task.status == 'done'
      })
    }
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
    width:80%;
    max-width: 1000px;
    background-color: rgb(241, 245, 247);
    border-radius: 15px;
    padding-top: 15px;
  }
  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  button {
    margin-bottom: 20px;
    background-color: rgb(41, 161, 221);
    width: 100px;
    color: white;
    border-radius: 100vh;
  }
</style>

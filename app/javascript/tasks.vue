<template>
  <div>
    <p>{{ title }}</p>
    <button @click="handleShowTaskCreateModal">
      新規登録
    </button>
    <TaskDetailModal v-if="isVisibleTaskDetailModal" :task="taskDetail" @close-modal="handleCloseTaskDetailModal" />
    <TaskCreateModal v-if="isVisibleTaskCreateModal"  @close-modal="handleCloseTaskCreateModal"/>
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

export default {
  components: {
    TaskDetailModal,
    TaskCreateModal,
  },
  data: function () {
    return {
      title: "Task page!",
      tasks: [],
      taskDetail: {},
      isVisibleTaskDetailModal: false,
      isVisibleTaskCreateModal: false
    }
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      this.$axios.get("tasks")
        .then(res => this.tasks = res.data)
        .catch(err => console.log(err.status));
    },
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

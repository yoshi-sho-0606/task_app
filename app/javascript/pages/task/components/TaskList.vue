<template>
    <div class='task-container'>
      <p class='task-status'>current</p>
      <template v-for="task in tasks" :key="task.id">
        <TaskItem :task="task"/>
      </template>
    </div>
</template>

<script>
import TaskItem from './TaskItem'
export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  props: {
    tasks: {
      type: Array,
      requierd: true
    }
  }
}
</script>

<style>
  .task-status {
    background-color: white;
    width: 200px;
    border-radius: 15px;
    text-align: center;
    height: 30px;
    margin: 0 auto;
  }
  .task-card {
    border: 1px solid;
    margin-top: 10px;
    margin: 0 auto;
    margin-top: 15px;
    width: 200px;
    height: 50px;
    color: 12px;
    border-radius: 15px;
    text-align: center;
  }
  .task-container {
    width: 100%;
    margin: 0 auto;
    padding: 23px;
  }
</style>
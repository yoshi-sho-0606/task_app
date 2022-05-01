<template>
  <div 
    :id="'task-' + task.id"
    class="task-detail"
    @click="handleShowTaskDetailModal(task)"
  >
    <p>{{task.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      require: true
    }
  },
  methods: {
    handleShowTaskDetailModal: function(task) {
      this.$emit('handleShowTaskDetailModal', task)
    }
  }
}
</script>

<style>
  .task-detail {
    border: 1px solid black;
    width: 200px;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 10px;
    text-align: center;
  }
</style>
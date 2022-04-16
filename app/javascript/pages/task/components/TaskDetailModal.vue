<template>
  <div @click="handleCloseModal">
    <h1>{{task.name}}</h1>
    <p>{{task.body}}</p>
  </div>
</template>

<script>

export default {
  name: 'TaskDetailModal',
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
    handleCloseModal(){
      this.$emit('close-modal')
    }
  }
}
</script>

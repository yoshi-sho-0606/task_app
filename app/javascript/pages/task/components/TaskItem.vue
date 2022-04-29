<template>
  <p>{{task.name}}</p>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object
    }
  }
}
</script>

<style>

</style>
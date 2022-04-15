<template>
  <div>
    <p>{{ title }}</p>
    <router-link :to="{name: 'Top' }">Task一覧へ</router-link>
    <div v-for='task in tasks' :key='task.id'>
      <p>{{task.name}}</p>
      <p>{{task.body}}</p>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Task page!",
      tasks: [
        {
          id: 1,
          name: 'first-task',
          body: '最初のタスクです'
        },
        {
          id: 2,
          name: 'second-task',
          body: '二番目のタスクです'
        },
        {
          id: 3,
          name: 'third',
          body: '三番目のタスクです'
        }
      ]
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>

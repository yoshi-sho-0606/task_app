<template>
  <div id="app">
    <p>{{ title }}</p>
    <router-link :to="{name: 'Tasks' }">Task一覧へ</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Top page!",
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
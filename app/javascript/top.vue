<template>
  <div id="app">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'Top page!'
    }
  }
}
</script>

<style scoped>
  #app {
    text-align: center;
  }
</style>
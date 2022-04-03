<template>
  <div id="app">
    <p>{{ message }}</p>
    <p>{{$store.state.count}}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Top page!"
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
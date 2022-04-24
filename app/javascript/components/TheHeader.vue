<template>
  <header id='header'>
    <div class='wrapper'>
      <router-link :to="{name: 'Top' }">Task App</router-link>
      <nav>
        <ul>
          <li>
            <router-link :to="{name: 'Top' }">Top</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Tasks' }">Tasks</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>
<style>
  #header {
    width: 100%;
    background-color: rgb(41, 214, 113);
  }
  #header .wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 1000px; 
  }
</style>

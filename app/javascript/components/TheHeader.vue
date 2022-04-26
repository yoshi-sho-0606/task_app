<template>
  <header id='header'>
    <div class='wrapper'>
      <router-link :to="{name: 'Top' }" class='top-link'>Task App</router-link>
      <nav>
        <ul class='main-nav'>
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
  a {
    text-decoration: none;
  }
  #header {
    width: 90%;
    height: 70px;
    margin: 0 auto;
    font-size: 20px;
  }
  #header .wrapper {
    display: flex;
    justify-content: space-between;
    
  }
  .top-link {
    margin-top: 20px;
  }
  .main-nav {
    display: flex;
    margin-top: 20px;
    list-style: none;

  }
  .main-nav li {
    margin-left: 36px;
  }
</style>

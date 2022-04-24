<template>
  <div id='main'>
    <div class='wrapper'>
      <TheHeader />
      <router-view />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from 'components/TheHeader'
import TheFooter from 'components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style>
  #main {
    width: 100%;
  }
  #main .wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 1000px; 
  }
</style>


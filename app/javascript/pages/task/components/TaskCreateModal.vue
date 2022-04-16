<template>
<div @click="handleCloseModal">
  <p>createModal</p>
</div>
</template>

<script>

export default {
  name: 'TaskCreateModal',
  methods: {
    handleCloseModal: function(){
      this.$emit('close-modal')
    }
  }
}
</script>

<template>
  <div class="pill">
      <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style scoped>
  .pill {
    background-color: aqua;
  }
</style>
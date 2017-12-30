<template>
  <div>
      <h3>新闻{{ _id }}</h3>
  </div>
</template>

<script>
export default {
  name: 'news',
  props: ['_id']
}
</script>

<style scoped>
h3 {
    color: rgb(18, 230, 166);
}
</style>



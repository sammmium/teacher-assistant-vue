<template>
  <h1 class="shift">Welcome page</h1>
  <span>здесь должны быть пояснялки про то какой хороший это продукт</span>
  <span>доступна страница для неавторизованных пользователей</span>
</template>
<script>
export default {
  name: "Welcome",

  data() {
    return {
      
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      console.log('Welcome');
    }
  }
}
</script>
<style lang="scss">
.shift {
  margin-top: 100px;
}
</style>

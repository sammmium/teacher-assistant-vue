<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
  </div>
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue';
export default {
  data() {
    const titlePage = 'Home page';
    const breadcrumbs = [
      {
        name: 'Home',
        link: '/home'
      },
      {
        name: 'About',
        link: '/about'
      }
    ];
    return {
      titlePage,
      breadcrumbs
    };
  },

  components: {
    Breadcrumbs
  }
}
</script>

<style lang="scss">
.shift {
  margin-top: 400px;
}
</style>

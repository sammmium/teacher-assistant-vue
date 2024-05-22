<template>
  <div class="layout-breadcrumbs">
    <div v-for="item in breadcrumbs">
      <div class="breadcrumb-item">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'breadcrumbs'
  ]
}
</script>
<style lang="scss">
.layout-breadcrumbs {
  display: flex;
  width: 100%;
  height: 40px;
  background-color: lightgray;
  color: ghostwhite;
  gap: 20px;

  .breadcrumb-item {
    padding: 0 100px;
  }
}
</style>
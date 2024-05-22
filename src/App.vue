<template>
  <div class="layout-head">
    <div class="logo">
      <router-link to="/">
        Teacher Assistant
      </router-link>
    </div>
    <div class="topbar">
      <div class="menu">
        <div class="menu-left">
          <Menu />
        </div>
        <div class="menu-right">
          <RightMenu />
        </div>
      </div>
    </div>
  </div>
  <div class="layout-main">
    <router-view></router-view>
  </div>
  <div class="layout-bottom"></div>
</template>

<script>
import Menu from "./components/Menu.vue";
import RightMenu from "./components/RightMenu.vue";

export default {
  name: "App",

  data() {
    return {
      
    }
  },

  props: [
    'isLogged'
  ],

  components: {
    Menu,
    RightMenu
  }
}
</script>

<style scoped lang="scss">
.layout-head {
  display: flex;
  width: 100%;
  height: 80px;
  background-color: dimgray;
  color: ghostwhite;

  .logo {
    display: flex;
    width: 20%;
    place-items: center;
    font-size: 30px;
    font-weight: 600;
    padding: 0 40px;
  }

  .topbar {
    display: flex;
    width: 80%;
    flex-direction: column;
    padding: 14px 0;

    .menu {
      display: flex;
      justify-content: space-between;
      // height: 40px;
      place-items: center;
      font-size: 20px;
      padding-top: 10px;

      .menu-left {
        display: flex;
        flex-direction: row;
        gap: 30px;
        color: ghostwhite;
      }

      .menu-right {
        padding-right: 40px;
      }
    }

    // .breadcrumbs {
    //   place-items: center;
    //   font-size: 16px;
    //   padding-bottom: 10px;
    //   color: lightgrey;
    // }
  }
}
</style>

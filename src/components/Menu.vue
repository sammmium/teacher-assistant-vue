<template>
  <div v-for="menuItem in menu">
    <router-link :to="menuItem.link" class="menu-item">
      {{ menuItem.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Menu",

  data() {
    const menu = [
      {
        name: "Home",
        route: "home",
        link: "/home"
      },
      {
        name: "Room",
        route: "room",
        link: "/room"
      },
      {
        name: "About",
        route: "about",
        link: "/about"
      },
    ];

    return {
      menu
    }
  }
}
</script>

<style scoped lang="scss">
.menu-item {
  color: ghostwhite;

  &:hover {
    color: lightblue
  }
}
</style>
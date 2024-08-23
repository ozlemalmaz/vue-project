<template>
  <div id="app">
    <Sidebar />
    <RouterView />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    Sidebar,
    RouterView,
  },
};
</script>

<style>
#app {
  display: flex;
}
</style>

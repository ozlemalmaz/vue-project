<template>
  <div class="sidebar">
    <RouterLink to="/users" class="menu-item">Users</RouterLink>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}
.menu-item {
  display: block;
  padding: 10px;
  margin-bottom: 10px;
  color: #333;
  text-decoration: none;
}
.menu-item:hover {
  background-color: #ddd;
}
</style>

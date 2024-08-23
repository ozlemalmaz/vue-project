<template>
  <div class="users-page">
    <h2>All Users</h2>
    <UsersList />
  </div>
</template>

<script>
import UsersList from "../components/UsersList.vue";

export default {
  name: "Users",
  components: {
    UsersList,
  },
};
</script>

<style>
.users-page {
  padding: 20px;
  width: 100%;
}
</style>

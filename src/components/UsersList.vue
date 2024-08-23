<template>
  <div class="users-list">
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UserCard from "./UserCard.vue";

export default {
  name: "UsersList",
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
      });
  },
};
</script>

<style>
.users-list {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
</style>

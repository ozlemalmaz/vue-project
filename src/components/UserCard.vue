<template>
  <div class="user-card" @click="goToDetail">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <p>{{ user.phone }}</p>
    <p>{{ user.address.city }}, {{ user.address.street }}</p>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: Object,
  },
  methods: {
    goToDetail() {
      this.$router.push(`/users/${this.user.id}`);
    },
  },
};
</script>

<style>
.user-card {
  border: 1px solid #caabba;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.user-card:hover {
  background-color: #aa33ee;
}
</style>

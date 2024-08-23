<template>
  <div class="user-detail-page">
    <RouterLink to="/users" class="back-home">Go Home</RouterLink>
    <nav class="user-nav">
      <RouterLink :to="`/users/${user.id}/todos`" class="nav-link"
        >Todos</RouterLink
      >
      <RouterLink :to="`/users/${user.id}/posts`" class="nav-link"
        >Posts</RouterLink
      >
      <RouterLink :to="`/users/${user.id}/albums`" class="nav-link"
        >Albums</RouterLink
      >
      <RouterView />
    </nav>
  </div>
  <div class="user-details">
    <h3>User Details</h3>
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
    <p>{{ user.phone }}</p>
    <p>{{ user.company.name }}</p>
    <p>{{ user.address.city }}, {{ user.address.street }}</p>
  </div>
</template>

<script>
export default {
  name: "UserDetails",
  data() {
    return {
      user: {},
    };
  },
  created() {
    const userId = this.$route.params.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        this.user = data;
      });
  },
};
</script>

<style>
.user-detail-page {
  padding: 10px;
  width: 100%;
}
.user-details {
  padding: 20px;
  width: 100%;
}
.user-nav {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
}
.nav-link {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #ccc;
  text-decoration: none;
  color: black;
  border-radius: 5px;
}
.nav-link:hover {
  background-color: #bbb;
}
.back-home {
  display: inline-block;
  margin-top: 20px;
  padding: 10px;
  background-color: #ccc;
  text-decoration: none;
  color: black;
  border-radius: 5px;
}
.back-home:hover {
  background-color: #bbb;
}
</style>

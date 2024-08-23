<template>
  <div class="posts">
    <h3>Posts</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    const userId = this.$route.params.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => {
        this.posts = data;
      });
  },
};
</script>

<style>
.posts {
  padding: 20px;
}
</style>

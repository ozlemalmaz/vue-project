<template>
  <div class="albums">
    <h3>Albums</h3>
    <ul>
      <li v-for="album in albums" :key="album.id">
        {{ album.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Albums",
  data() {
    return {
      albums: [],
    };
  },
  created() {
    const userId = this.$route.params.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((response) => response.json())
      .then((data) => {
        this.albums = data;
      });
  },
};
</script>

<style>
.albums {
  padding: 20px;
}
</style>

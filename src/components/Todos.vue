<template>
  <div class="todos">
    <h3>Todos</h3>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" :checked="todo.completed" />
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todos",
  data() {
    return {
      todos: [],
    };
  },
  created() {
    const userId = this.$route.params.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((data) => {
        this.todos = data;
      });
  },
};
</script>

<style>
.todos {
  padding: 20px;
}
</style>

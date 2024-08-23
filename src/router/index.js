import { createRouter, createWebHistory } from "vue-router";
import Users from "../views/Users.vue";
import Todos from "../components/Todos.vue";
import Posts from "../components/Posts.vue";
import Albums from "../components/Albums.vue";
import UserDetails from "../components/UserDetails.vue";

const routes = [
  {
    path: "/",
    redirect: "/users",
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/users/:id",
    component: UserDetails,
    children: [
      {
        path: "todos",
        component: Todos,
        props: true,
      },
      {
        path: "posts",
        component: Posts,
        props: true,
      },
      {
        path: "albums",
        component: Albums,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

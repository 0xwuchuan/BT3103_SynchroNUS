import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Landing from "../views/Landing.vue";
import CreateEvent from "../views/CreateEvent.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/resetpass",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/create",
    name: "CreateEvent",
    component: CreateEvent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login" && auth.currentUser) {
    // Only when router.push if user types in /login they still can access page
    next("/home");
    return;
  }
  if (to.path == "/signup" && auth.currentUser) {
    next("/home");
    return;
  }
  if (to.path == "/" && auth.currentUser) {
    next("/home");
    return;
  }
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/login");
    return;
  }

  next();
});

export default router;

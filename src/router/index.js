import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Home from "../views/Test.vue"
import ResetPassword from "../views/ResetPassword.vue";
import { auth } from "../firebase";

const routes = [
  {
    path: "/test",
    name: "test",
    component: Home,
    meta: {
      requiresAuth: true
    }
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from , next) => {
  if (to.path == '/login' && auth.currentUser) {
    next('/test')
    return;
  }
  if (to.path == '/signup' && auth.currentUser) {
    next('/test')
    return;
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Home from "../views/Home.vue";
import Page1 from "../views/Page1.vue";
import Event from "../components/Event.vue"
import { auth } from "../firebase";

const routes = [
  
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
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
    path: "/page1",
    name: "Page1",
    component: Page1,
  },
  {
    path: "/event",
    name: "Event",
    component: Event
  }
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

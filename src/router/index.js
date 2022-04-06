import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase";
import { firebaseApp } from "../firebase";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import ResetPassword from "../views/ResetPassword.vue";
import EventPage from "../views/EventPage.vue";
import Event from "../components/Event.vue";
import Landing from "../views/Landing.vue";
import NotifsPage from "../views/NotifsPage.vue";
import CommentTest from "../views/CommentTest.vue";
import Profile from "../views/Profile.vue";
import Created from "../views/Created.vue";
import Upcoming from "../views/Upcoming.vue";
import CreateEvent from "../views/CreateEvent.vue";
import EditEvent from "../views/EditEvent.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }
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
    path: "/notifications",
    name: "NotifsPage",
    component: NotifsPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/testpage-comments",
    name: "CommentTest",
    component: CommentTest,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: "/created",
    name: "Created",
    component: Created,
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: Upcoming,
  },
  {
    path: "/eventpage/:id",
    name: "EventPage",
    component: EventPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
  },
  {
    path: "/edit/:id",
    name: "EditEvent",
    component: EditEvent,
    meta: { requiresAuth: true }
  },
  {
    path: "/create",
    name: "CreateEvent",
    component: CreateEvent,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
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
    await to.matched.some((record) => record.meta.requiresAuth) &&
    !await firebaseApp.getCurrentUser()
  ) {
      console.log("TEST2")
      //console.log(auth.currentUser)
      next("/login");
      return;
  }
  if (
    await to.matched.some((record) => record.meta.requiresAuth) &&
    await firebaseApp.getCurrentUser() && !auth.currentUser.emailVerified 
  ) {
    console.log("ASLDUHASUICH")
    console.log(auth.currentUser.emailVerified)
    auth.signOut()
    window.alert("please verify your email to proceed!")
    next("/login");
    return;
  }
  

  next();
});

export default router;

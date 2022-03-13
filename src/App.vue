<template>
  <div class="flex flex-col justify-center bg-gradient-to-r from-primary to-secondary items-center h-screen">
    <nav class="fixed w-full top-0 p-5 flex justify-between">
      <router-link class="text-xl" to="/">
        <img class="w-72" src="./assets/3.1.png" alt="Logo">
      </router-link>
      <div>
        <router-link class="text-xl px-3" to="/login">Login</router-link>
        <router-link class="text-xl px-3" to="/signup">Signup</router-link>
        <button @click="signout">Sign ou</button>
      </div>
    </nav>
    <!-- Check condition for whether user is logged in then can remove? -->
    <!-- Router views most likely belong in a nav -->
    <router-view/>
  </div>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from './firebase';
import router from './router/index'

export default {

  name: 'App',
  methods: {
    signout() {
      signOut(auth);
      router.push('/login')
    }
  }
}
</script>


<template>
    <nav class="fixed w-full top-0 p-5 flex justify-between">
        <router-link class="text-xl" to="/">
            <img class="w-72" src="../assets/3.1.png" alt="Logo">
        </router-link>
        <div>
            <button v-if="isLoggedIn" @click="signout">Sign out</button>
        </div>
    </nav>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import router from '../router/index'

export default {
    name: "Nav",
    data() {
        return {
            isLoggedIn: this.$route.params.isLoggedIn
        }
    },
    methods: {
    signout() {
      signOut(auth);
      router.push('/login')
  }
  }
}
</script>

<style>

</style>
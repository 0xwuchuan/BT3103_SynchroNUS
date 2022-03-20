<template>
    <nav class="sticky w-full top-0 p-5 flex justify-between bg-gradient-to-r from-primary to-secondary">
        <router-link v-if="user" class="text-xl" to="/home">
            <img class="w-72" src="../assets/3.1.png" alt="Logo">
        </router-link>
        <router-link v-else class="text-xl" to="/">
            <img class="w-72" src="../assets/3.1.png" alt="Logo">
        </router-link>
        <div>
            <button class="rounded-full py-2 px-4 border-2 border-black" v-if="user" @click="signout">Sign out</button>
        </div>
    </nav>
</template>

<script>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';
import router from '../router/index'

export default {
    name: "Nav",
    data() {
        return {
            user: false,
        }
    },
    mounted() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
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
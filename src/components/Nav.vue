<template>
    <nav class="sticky w-full top-0 p-5 flex justify-between bg-gradient-to-r from-primary to-secondary">
        <router-link v-if="user" class="text-xl" to="/home">
            <img class="w-72" src="../assets/3.1.png" alt="Logo">
        </router-link>
        <router-link v-else class="text-xl" to="/">
            <img class="w-72" src="../assets/3.1.png" alt="Logo">
        </router-link>
        <div class="flex flex-row items-center font-mont">
            <router-link to="/notifications">
                <button class="rounded-lg py-2 px-4 mx-2 text-white font-bold bg-gray-300 bg-opacity-50 hover:bg-gray-100 hover:bg-opacity-50 transition duration-75 ease-linear" v-if="user">Notifications</button>
            </router-link>
            <router-link to="/profile">
                <button class="rounded-lg py-2 px-4 mx-2 text-white font-bold bg-gray-300 bg-opacity-50 hover:bg-gray-100 hover:bg-opacity-50 transition duration-75 ease-linear" v-if="user">Profile</button>
            </router-link>
            <button class="rounded-lg py-2 px-4 mx-2 text-white font-bold bg-gray-300 bg-opacity-50 hover:bg-gray-100 hover:bg-opacity-50 transition duration-75 ease-linear" v-if="user" @click="signout">Sign out</button>
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
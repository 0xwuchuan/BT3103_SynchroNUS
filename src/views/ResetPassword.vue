<template>
    <Nav />
  <div class="flex flex-col items-center bg-white rounded-lg filter drop-shadow-md h-80 w-10/12 md:w-96"> 
    <h1 class="text-3xl font-bold my-10">Reset Password</h1>
    <form class="flex flex-col justify-center items-center w-full" @submit.prevent="resetPassword">
        <div class="flex flex-col items-left w-10/12 m-3">
            <div class="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <label for="email">Email</label>
            </div>
            <input v-model="email" class="inline-block w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" id="email" type="email" placeholder="Enter your email">
        </div>
        <button class="block rounded-md bg-yellow-500 hover:bg-yellow-600 transition ease-linear text-white font-semibold w-10/12 text-lg m-5 h-10" type="submit">Reset Password</button>
    </form>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue"
import { auth } from '../firebase.js'
import { sendPasswordResetEmail } from "firebase/auth";

export default {
    name: "ResetPassword",
    components: {
        Nav
    },
    data() {
        return {
            email: ""
        }
    },
    methods : {
        resetPassword() {
            sendPasswordResetEmail(auth, this.email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
        }
    }
}
</script>

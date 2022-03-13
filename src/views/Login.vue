<template>
  <div class="flex flex-col items-center bg-white rounded-lg filter drop-shadow-md h-3/5 w-10/12 md:w-5/12 lg:w-3/12"> 
    <h1 class="text-3xl font-bold my-10">Login into SynchroNUS</h1>
    <form class="flex flex-col justify-center items-center w-full" @submit.prevent="login">
        <div class="flex flex-col items-left w-10/12 m-3">
            <div class="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <label for="email">Email</label>
            </div>
            <input v-model="email" class="inline-block w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" id="email" type="email" placeholder="Enter your email">
        </div>
        <div class="flex flex-col items-left w-10/12 m-3">
            <div class="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <label for="password">Password</label>
            </div>
            <input v-model="password" class="inline-block w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200  focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="password" placeholder="Enter your password" id="password">
        </div>
        <button class="block rounded-md bg-yellow-500 hover:bg-yellow-600 transition ease-linear text-white font-semibold w-10/12 text-lg m-3 h-10" type="submit">Login</button>
        <router-link class="text-sm text-yellow-500 hover:text-yellow-600 transition ease-linear m-5" to="/signup">Or Sign Up</router-link>
        <router-link class="text-sm text-gray-400 hover:text-gray-600 transition ease-linear m-6" to="/resetpass">Forgot password?</router-link>
    </form>
  </div>
</template>

<script>
import firebaseApp from '../firebase.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from '../router/index'

const auth = getAuth(firebaseApp);

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        test() {
            console.log(this.email);
            console.log(this.password);
        },
        login() {
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                router.push('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
        }
    },
}
</script>

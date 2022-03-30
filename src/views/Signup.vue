<template>
    <Nav />
    <div class="flex flex-col justify-center items-center h-5/6">
        <div class="flex flex-col items-center bg-white rounded-lg filter drop-shadow-md h-104 w-10/12 md:w-100"> 
            <h1 class="text-3xl font-bold mt-10">Create an account</h1>
            <form class="flex flex-col justify-center items-center w-full" @submit.prevent="signup">
                <div class="flex flex-col items-left w-10/12 m-3">
                    <div class="flex flex-row items-center">
                        <label for="name">Name</label>
                    </div>
                    <input v-model="name" class="w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="name" placeholder="Enter your full name" id="name" required>
                </div>
                <div class="flex flex-col items-left w-10/12 m-3">
                    <div class="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <label for="email">Email</label>
                    </div>
                    <input v-model="email" class="w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="email" placeholder="Enter your NUS email" id="email" required>
                </div>
                <div class="flex flex-col items-left w-10/12 m-3">
                    <div class="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <label for="password">Password</label>
                    </div>
                    <input v-model="password" class="w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200  focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="password" placeholder="Enter your password" id="password" required>
                </div>
                <div class="flex flex-col items-left w-10/12 m-3">
                    <div class="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <label for="cfmPassword">Confirm Password</label>
                    </div>
                    <input class="w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200  focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="password" placeholder="Confirm your password" id="cfmPassword" required>
                </div>
                <div class="flex flex-row items-left w-10/12 m-3">
                    <div class="flex flex-col w-1/4 m-1">
                        <label for="gender">Gender</label>
                        <select class="bg-gray-100 rounded-md p-2 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" v-model="gender" required>
                            <option disabled selected value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="flex flex-col w-1/4 m-1">
                        <label for="year">Year</label>
                        <select class="bg-gray-100 rounded-md p-2 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" v-model="year" required>
                            <option disabled selected value="">Year</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                    </select>
                    </div>
                    <div class="flex flex-col w-2/4 m-1">
                        <label for="teleHandle">Telegram Handle</label>
                        <input class="bg-gray-100 rounded-md p-2 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="text" v-model="teleHandle" required>
                    </div>
                </div>
                <button class="block rounded-md bg-secondary hover:bg-yellow-500 transition ease-linear text-white font-semibold w-10/12 text-lg m-3 h-10" type="button" v-on:click="signup()">Get Started</button>
                <router-link class="text-sm text-secondary hover:text-yellow-500 transition ease-linear m-5" to="/login">Already have an account? Login here</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import {doc, setDoc} from "firebase/firestore";
import Nav from "../components/Nav.vue"
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import router from '../router/index'
const db = getFirestore(firebaseApp);


export default {
    name: "Signup",
    components: {
        Nav
    },
    data() {
        return {
            email: "",
            password: "",
            name: "",
            gender: "",
            year: "",
            teleHandle: ""

        }
    },
    methods: {
        test() {
            console.log(this.email);
            console.log(this.password);
        },
        // signup() {
        //     createUserWithEmailAndPassword(auth, this.email, this.password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         console.log(user);
        //         sendEmailVerification(user);
        //         router.push('/test')
        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.log(errorCode, errorMessage);
        //         // ..
        //     });
        // }
        async signup() {
            const auth = getAuth(); 
            const setUser = await setDoc(doc(db, "Users", this.email), {
                name: this.name,
                gender: this.gender,
                year: this.year,
                teleHandle: this.teleHandle,
                upcoming: [],
                saved: [],
                created: []
            });

            createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user);
                        sendEmailVerification(user);
                        router.push('/home')
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                        // ..
                    });
            console.log(setUser)
        },
    },
}
</script>

<template>
    <Nav />   
    <div class="flex justify-center items-center flex-row h-5/6 ml-10 p-5">
        <div class="flex justify-center flex-col bg-white opacity-90 rounded-lg filter drop-shadow-md h-100 w-10/12 md:w-104 p-5">
            <div class="flex justify-between p-2">
            <h3 class="text-3xl text-center font-semibold pl-3 ml-8">Edit your Profile</h3>
            <button @click="backToProfile" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            </div>
            <form id="editForm" class="flex flex-col justify-center items-center w-full" @submit.prevent="editUser()">
                <div class="flex flex-col items-left w-10/12 m-3">
                    <div class="flex flex-row items-center">
                        <label for="name">Name</label>
                    </div>
                    <input v-model="name" class="w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="name" :placeholder="this.userName" id="name" >
                </div>
                <div class="flex flex-col items-left w-10/12 m-3">
                    <div class="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <label for="email">Email</label>
                    </div>
                    <input v-model="email" disabled="disabled" class="w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="email" :placeholder="userEmail" id="email" >
                </div>
                <div class="flex flex-row items-left w-10/12 m-3">
                    <div class="flex flex-col w-1/4 m-1">
                        <label for="gender">Gender</label>
                        <select class="bg-gray-100 rounded-md p-2 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" v-model="gender" >
                            <option disabled selected value="">{{this.userGender}}</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="flex flex-col w-1/4 m-1">
                        <label for="year">Year</label>
                        <select class="bg-gray-100 rounded-md p-2 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" v-model="year" >
                            <option disabled selected value="">{{this.userYear}}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                    </select>
                    </div>
                    <div class="flex flex-col w-2/4 m-1">
                        <label for="teleHandle">Telegram Handle</label>
                        <input class="bg-gray-100 rounded-md p-2 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="text" :placeholder="userTeleHandle" v-model="teleHandle"  >
                    </div>
                </div>
                <button class="block rounded-md bg-secondary hover:bg-opacity-90 transition ease-linear text-white font-semibold w-10/12 text-lg m-3 h-10" type="button" @click="editUser">Edit</button>
            </form>
        </div>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { updateDoc, doc, getDoc } from "firebase/firestore";
import router from '../router/index'

const db = getFirestore(firebaseApp);


export default {
    name: 'EditProfile',

    components: {
    },
    data() {
    return {
      user: false,
      userVerified: false,
      userEmail: "",
      userName: "",
      userGender: "",
      userTeleHandle: "",
      userYear: "",
    }
  },
  methods: {
      checkAuthStatus() {
            return new Promise( (resolve, reject) => {
                try{
                    const auth = getAuth() 
                    onAuthStateChanged(auth, (user) => {
                        this.userEmail = user.email
                        this.userVerified = user.emailVerified
                        resolve(user)
                    })
                } catch (err) {
                    reject(err)
                }
            })
        },
        backToProfile() {
            router.push('/profile')
        },

        editUser() {  
            const userRef = doc(db, "Users", String(this.userEmail))
            
            if(this.name != null) {
                updateDoc(userRef, {
                    name: this.name
                });
                this.userName = this.name
                console.log("edited name")
                alert("Edited name to " + this.name)
                this.name = null   
            }   

            if(this.gender != null) {
                updateDoc(userRef, {
                    gender: this.gender
                });
                this.userGender = this.gender
                alert("Edited gender to " + this.gender)
                console.log("edited gender")
                this.gender = null  
            }   
            if(this.teleHandle != null) {
                updateDoc(userRef, {
                    teleHandle: this.teleHandle
                });
                this.userTeleHandle = this.teleHandle
                alert("Edited telegram handle to " + this.teleHandle)
                console.log("edited teleHandle")
                this.teleHandle = null  

            }   

            if(this.year != null) {
                updateDoc(userRef, {
                    year: this.year
                });
                this.userYear = this.year
                alert("Edited year to " + this.year)
                console.log("edited year")
                this.year = null
            }
            document.getElementById('editForm').reset();
            router.push('/profile')
        }
  },

    async mounted() {
        this.user = await this.checkAuthStatus()    
        console.log(this.userVerified)
        const userRef = await doc(db, "Users", String(this.userEmail))
        const userDoc = await getDoc(userRef)
        
        
    
        if (userDoc.exists()) {
            const userData = await userDoc.data();
            console.log(userData);
            this.userName = userData.name
            this.userGender = userData.gender
            this.userTeleHandle = userData.teleHandle
            this.userYear = userData.year
        } else {
            console.log("No such document!");
        }
    }
}
</script>

<style>

</style>


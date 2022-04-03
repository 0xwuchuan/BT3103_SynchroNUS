<template>
<Nav/>
<div class="pt-10 px-10 main grid place-items-start h-fit ">
    <!--upcoming-->
        <div class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-full">
            <!--title-->
            <div class="name text-gray-800 text-2xl font-medium mt-4 ">
                <p>Created</p>
            </div>
            <div class="container mx-auto">
                <div class="flex">
                    <div v-for="event in userCreated.reverse()" :key="event.title" class="inline-block w-100">
                        <Event
                            :title="event.title"
                            :description="event.description"
                            :date="event.postDate"
                            :link="'eventpage/'+event.id"
                            :imageUrl="event.imageUrl"
                        />
                    </div>
                </div>
            </div>      
        </div>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Event from '@/components/Event.vue'
import Nav from '@/components/Nav.vue'
import { doc, getDoc } from 'firebase/firestore'
const db = getFirestore(firebaseApp);

export default {
    name: 'MyEvents',

    components: {
        Nav,
        Event,

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
      userUpcoming: [],
      userSaved: [],
      userCreated: []
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
            this.userUpcoming = userData.upcoming
            this.userSaved = userData.saved
            this.userCreated = userData.created
            console.log(this.userCreated)

        } else {
            console.log("No such document!");
        }
    }
}
</script>

<style>

</style>
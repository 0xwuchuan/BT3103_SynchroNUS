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
            <div v-if="isLoading" class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:grid-cols-3">
            <!-- Skeleton Loader -->
                <div v-for="template in 3" :key="template" class="col-span-1">
                    <SkeletonEvent />
                </div>
            </div>
            <!-- Actual events -->
            <div v-else class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:grid-cols-3">
                <div v-for="event in userCreated.reverse()" :key="event.title" class="inline-block w-100">
                    <Event
                        :title="event.title"
                        :description="event.description"
                        :date="getRelativeTime(event.postDate)"
                        :link="'eventpage/'+event.id"
                        :imageUrl="event.imageUrl"
                        :tag="event.tag"
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
import SkeletonEvent from '@/components/Event.vue'
import Nav from '@/components/Nav.vue'
import { doc, getDoc } from 'firebase/firestore'
const db = getFirestore(firebaseApp);

export default {
    name: 'MyEvents',

    components: {
        Nav,
        Event,
        SkeletonEvent
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
                getRelativeTime(oldTimestamp) {
            const date = new Date();
            const currentTimeStamp = date.getTime();
            const seconds = Math.floor(currentTimeStamp/1000);
            const difference = seconds - Math.floor(oldTimestamp/1000)
            let output = ``;
            if (difference < 60) {
                // Less than a minute has passed:
                output = `${difference} seconds ago`;
            } else if (difference < 3600) {
                // Less than an hour has passed:
                output = `${Math.floor(difference / 60)} minutes ago`;
            } else if (difference < 86400) {
                // Less than a day has passed:
                output = `${Math.floor(difference / 3600)} hours ago`;
            } else if (difference < 2620800) {
                // Less than a month has passed:
                output = `${Math.floor(difference / 86400)} days ago`;
            } else if (difference < 31449600) {
                // Less than a year has passed:
                output = `${Math.floor(difference / 2620800)} months ago`;
            } else {
                // More than a year has passed:
                output = `${Math.floor(difference / 31449600)} years ago`;
            }
            return output;
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
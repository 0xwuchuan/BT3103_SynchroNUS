<template>
    <div class="pt-10 px-10 main grid place-items-start h-fit ">
    <!--upcoming-->
        <div class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-full">
            <!--title-->
            <div class="name text-gray-800 text-2xl font-medium mt-4 ">
                <p>Upcoming</p>
            </div>
            <div class="container mx-auto">
            <!-- Actual events -->
            <div class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:grid-cols-3">
                <div v-for="event in this.userUpcoming.slice(-3)" :key="event" class="col-span-1 ">
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
            <button @click="seeUpcoming" class="text-xs bg-secondary hover:bg-opacity-90 py-2 px-4 text-white w-full font-semibold rounded-lg shadow-lg">
                See all
            </button>         
        </div>
    </div>

    <div class="pt-10 px-10 main grid place-items-start h-fit ">
    <!--created events-->
    <div class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-full">
        <!--title-->
        <div class="name text-gray-800 text-2xl font-medium mt-4 ">
            <p>Created</p>
        </div>
        <div class="container mx-auto">
            <!-- Actual events -->
            <div class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:grid-cols-3">
                <div v-for="event in this.userCreated.slice(-3)" :key="event" class="col-span-1 ">
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
        <button @click="seeCreated" class="text-xs bg-secondary hover:bg-opacity-90 py-2 px-4 text-white w-full font-semibold rounded-lg shadow-lg">
                See all
        </button> 
    </div>
    </div>
    <br>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore, } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import router from '../router/index'
import Event from '@/components/Event.vue'
import { doc, getDoc } from 'firebase/firestore'
const db = getFirestore(firebaseApp);

export default {
    name: 'MyEvents',

    components: {
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
      userCreated: [],
      upcoming: [],
      created: []
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
        //TO-DO: display cut off at 4 events
        seeCreated() {
            router.push('/created')
        },

        seeUpcoming() {
            router.push('/upcoming')
        },

        async getUpcomingEvents() {
            let upcomingReversed = this.upcoming.reverse()
            for (let i = 0; i < this.upcoming.length; i++) {
                let eventId = upcomingReversed[i]
                const eventSnap = await getDoc(doc(db, "events", eventId))
                if (eventSnap.exists()) {
                    console.log("Document data:", eventSnap.data());
                    let eventInfo = eventSnap.data();
                    eventInfo.id = eventId
                    // Add to userUpcoming
                    this.userUpcoming.push(eventInfo)
                    console.log(this.userUpcoming.length)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }
        },
        async getCreatedEvents() {
            let createdReversed = this.created.reverse()
            for (let i = 0; i < this.created.length; i++) {
                let eventId = createdReversed[i]
                const eventSnap = await getDoc(doc(db, "events", eventId))
                if (eventSnap.exists()) {
                    console.log("Document data:", eventSnap.data());
                    let eventInfo = eventSnap.data();
                    eventInfo.id = eventId
                    // Add to userUpcoming
                    this.userCreated.push(eventInfo)
                    console.log("asdas"+this.userCreated.length)
                    console.log(this.userCreated.slice(this.userCreated.length - 3,this.userCreated.length))
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }
            console.log(this.userCreated)
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
            this.upcoming = userData.upcoming
            this.created = userData.created
        } else {
            console.log("No such document!");
        }

        // Update userUpcoming and userCreated with eventIds
        this.getUpcomingEvents()
        this.getCreatedEvents()
    },
}
</script>

<style>

</style>
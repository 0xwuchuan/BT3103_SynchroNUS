<template>
    <Nav />
    <div class="flex flex-row justify-start h-5/6 ml-10 p-5">
        <div class="flex flex-col justify-start bg-white opacity-90 rounded-lg filter drop-shadow-md h-108 w-10/12 md:w-104 p-5">
            <h3 class="text-3xl font-semibold pl-3">Edit your Event</h3>
            <form class="flex flex-col justify-start w-full" @submit.prevent="editEvent(this.id)">
                <div class="flex flex-col items-left w-full m-3">
                    <div class="flex flex-col items-left w-11/12 my-3">
                        <label for="title">Title</label>
                        <input class="inline-block w-full bg-gray-400 rounded-md p-2 border border-gray-200 focus:border-transpt transition ease-linear" type="text" v-bind:placeholder="this.title" id="title" readonly>
                    </div>
                    <div class="flex flex-col items-left w-11/12 my-3">
                        <label for="date">Date</label>
                        <input v-model="expiryDate" class="inline-block w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="date" placeholder="Enter the date of your event" id="date" required>
                    </div>
                    <div class="flex flex-col items-left w-11/12 my-3">
                        <label for="description">Description</label>
                        <input v-model="description" class="inline-block w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="text" placeholder="Enter a description of your event" id="description" required>
                    </div>
                    <div class="flex flex-row items-left w-11/12 my-3">
                        <div class="flex flex-col w-2/4 m-1">
                            <label for="location">Location</label>
                            <input class="bg-gray-100 rounded-md p-2 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="text" id="location" v-model="location" placeholder="Location" required>
                        </div>
                        <div class="flex flex-col w-2/4 m-1">
                            <label for="numOfParticipants">Number of participants</label>
                            <input class="bg-gray-100 rounded-md p-2 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="number" id="numOfParticipants" v-model="numOfParticipants" placeholder="Participant Limit" required>
                        </div>
                    </div>

                    <button class="rounded-md bg-secondary hover:bg-opacity-90 transition ease-linear text-white font-semibold w-11/12 text-lg my-3 h-10" type="submit">Edit</button>
                    
                </div>
            </form>
            <button class="block rounded-md bg-red-500 hover:bg-opacity-90 transition ease-linear text-white font-semibold w-11/12 text-lg my-3 mx-3 h-10" 
                type="submit" @click="deleteEvent(this.id)">Delete</button>
        </div>
        <!-- Preview of event? -->
        <div class="hidden lg:block h-108 w-108 mx-10 transition duration-200 ease-linear">
            <div class="c-card block bg-white bg-opacity-90 hover:bg-opacity-100 hover:shadow-2xl rounded-lg overflow-hidden transition duration-200 ease-linear">
                <div class="overflow-hidden h-56">
                    <img :src="require(`@/assets/${this.tag ? this.tag : 'Default'}.jpg`)">
                </div>
                <div class="p-4">
                    <span class="inline-block px-3 py-2 leading-none bg-orange-200 text-orange-900 
                        rounded-full font-semibold uppercase tracking-wide text-xs">{{ this.tag ? this.tag : "Sample Tag" }}</span>
                    <h3 class="mt-2 mb-2 text-2xl font-bold text-black text-opacity-80 max-h-9">{{ this.title ? this.title : "This is the title of your event"}}</h3>
                    <p class="text-sm">{{ this.description ? this.description : "This is how your description will look like" }}</p>
                    <div class="mt-3 flex items-center">
                        <button class="inline-block bg-secondary hover:bg-opacity-90 py-2 px-4 text-white w-full font-semibold rounded-lg shadow-lg" type="button" data-modal-toggle="authentication-modal">
                                Join
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {  getFirestore, doc, updateDoc, 
    deleteDoc, getDoc, arrayRemove } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth, firebaseApp } from '../firebase';
import {useRoute} from 'vue-router';
import router from '../router/index'

import Nav from "../components/Nav.vue"

const db = getFirestore(firebaseApp);

export default {
    name: 'EditEvent',
    components: {
        Nav
    },
    data() {
        return {
            user: false,
            title: "",
            expiryDate: "",
            location: "",
            numOfParticipants: "",
            description: "",
            id: '',
            tag: ''
        }
    },
    beforeMount(){
        const route = useRoute();
        console.warn("route",route.params);
        this.id = route.params.id;
        console.log(this.id);
  
      async function display(eventid){
        //console.log("displaying")
        let eventRef = doc(db, "events", eventid)
        let eventSnap = await getDoc(eventRef)
        console.log("Document data:", eventSnap.data());
        var info = eventSnap.data()
        return info
        }
      if (this.id){
        console.log(this.id)
        display(this.id).then( (info) => {
          //console.log(this.description)
          this.description = info.description
          this.location = info.location
          this.expiryDate = info.expiryDate
          this.title = info.title
          this.numOfParticipants = info.numOfParticipants
          this.tag = info.tag
          console.log("Creator"+info.userEmail)
          //console.log(this.description)
        })
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
        async editEvent(eventId) { // pass in things to edit
            const eventRef = doc(db, "events", eventId);
            const edit = await updateDoc(eventRef, {
                    // Stuff to edit
                    userEmail: this.user.email,
                    title: this.title,
                    expiryDate: this.expiryDate,
                    location: this.location,
                    numOfParticipants: this.numOfParticipants,
                    description: this.description,
                    comments: [],
                    participants: [],
                    requesters: []
                })
            console.log(edit)
            window.alert("Your event has been edited!")
            router.push("/home")
        },
        async deleteEvent(eventId) {
            const eventRef = doc(db, "events", eventId);
            const eventSnap = await getDoc(eventRef);
            const eventInfo = eventSnap.data();
            eventInfo.id = eventRef.id;
            await deleteDoc(eventRef)
            const userRef = doc(db, "Users", this.user.email)
            // Supposed to remove from all upcoming but since change to eventId only then it wont appear anyways
            // Remove from user created
            await updateDoc(userRef, {
                created: arrayRemove(eventRef.id),
            })
            alert("Event deleted successfully")
            router.push("/home")
        },
    }
}
</script>
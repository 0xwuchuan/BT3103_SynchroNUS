<template>
    <Nav />
    <div class="flex flex-col justify-start h-5/6 ml-10 p-5">
        <div class="flex flex-col justify-start bg-white opacity-90 rounded-lg filter drop-shadow-md h-5/6 w-5/12 p-5">
            <h1 class="text-3xl font-semibold pl-3">Create a new Event</h1>
            <form class="flex flex-col justify-start w-full" @submit.prevent="createEvent">
                <div class="flex flex-col items-left w-full m-3">
                    <div class="flex flex-col items-left w-11/12 my-3">
                        <label for="title">Title</label>
                        <input v-model="title" class="inline-block w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="text" placeholder="Enter the title of your event" id="title" required>
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

                    <button class="block rounded-md bg-secondary hover:bg-yellow-600 transition ease-linear text-white font-semibold w-11/12 text-lg my-3 h-10" type="submit">Create</button>
                </div>
            </form>
        </div>
    </div>
    
</template>

<script>
import {  getFirestore, doc, collection, setDoc, updateDoc, 
    deleteDoc, arrayUnion, arrayRemove } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth, firebaseApp } from '../firebase';
// import router from '../router/index'

import Nav from "../components/Nav.vue"

const db = getFirestore(firebaseApp);

export default {
    name: 'CreateEvent',
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
            postDate: "", // current Date
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
        async createEvent() {
            const eventRef = doc(collection(db, "events"));
            const setEvent = await setDoc(eventRef, {
                    userId: this.user.uid,
                    title: this.title,
                    expiryDate: this.expiryDate,
                    location: this.location,
                    numOfParticipants: this.numOfParticipants,
                    description: this.description,
                    postDate: new Date().toLocaleString(),
                    comments: [],
                    participants: [],
                    requesters: []
                })
            console.log(setEvent)
        },
        async editEvent(eventId) { // pass in things to edit
            const eventRef = doc(db, "events", eventId);
            const edit = await updateDoc(eventRef, {
                    // Stuff to edit
                })
            console.log(edit)
        },
        async deleteEvent(eventId) {
            const eventRef = doc(db, "events", eventId);
            const del = await deleteDoc(eventRef)
            console.log(del)
        },
        async requestToJoin(eventId) { // this.user should be the one clicking to request
            const eventRef = doc(db, "events", eventId);
            const request = await updateDoc(eventRef, {
                requesters: arrayUnion(this.user.uid)
            })
            console.log(request)
        },
        async acceptApplicant(userId, eventId) {
            const eventRef = doc(db, "events", eventId);
            const accept = await updateDoc(eventRef, {
                requesters: arrayRemove(userId),
                participants: arrayUnion(userId)
            })
            console.log(accept)
        }

    }
}
</script>
<template>
    <Nav />
    <div class="flex flex-row justify-start h-5/6 ml-10 p-5">
        <!-- Create Event Form -->
        <div class="flex flex-col justify-start bg-white opacity-90 rounded-lg filter drop-shadow-md h-108 w-10/12 md:w-104 p-5">
            <h3 class="text-3xl font-semibold pl-3">Create a new Event</h3>
            <form id="createEventForm" class="flex flex-col justify-start w-full" @submit.prevent="createEvent">
                <div class="flex flex-col items-left w-full m-3">
                    <div class="flex flex-col items-left w-11/12 my-2">
                        <label for="title">Title</label>
                        <input v-model="title" class="inline-block w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200
                             focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="text" 
                                placeholder="Enter the title of your event" id="title" required>
                    </div>
                    <div class="flex flex-col items-left w-11/12 my-2">
                        <label for="date">Date</label>
                        <input v-model="expiryDate" class="inline-block w-full bg-gray-100 focus:bg-white rounded-md p-2 border border-gray-200 
                            focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="date" 
                                placeholder="Enter the date of your event" id="date" required>
                    </div>
                    <div class="flex flex-col items-left w-11/12 my-2">
                        <label for="description">Description</label>
                        <input v-model="description" class="inline-block w-full bg-gray-100 focus:bg-white rounded-md p-2 border
                             border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="text" 
                                placeholder="Enter a short description of your event" id="description" required>
                    </div>
                    <div class="flex flex-row items-left w-11/12 my-2">
                        <div class="flex flex-col w-2/4 m-1">
                            <label for="location">Location</label>
                            <input class="bg-gray-100 rounded-md p-2 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 
                                focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="text" 
                                    id="location" v-model="location" placeholder="Location" required>
                        </div>
                        <div class="flex flex-col w-2/4 m-1">
                            <label for="numOfParticipants">Number of participants</label>
                            <input class="bg-gray-100 rounded-md p-2 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 
                                focus:ring-yellow-400 focus:border-transparent transition ease-linear" type="number" min="0" 
                                    id="numOfParticipants" v-model="numOfParticipants" placeholder="Participant Limit" required>
                        </div>
                    </div>
                    <div class="flex flex-row items-left w-11/12 my-2">
                        <div class="flex flex-col w-full m-1">
                            <label for="tag">Tags</label>
                            <select v-model="tag" id="tag" class="bg-gray-100 rounded-md p-2 border border-gray-200 focus:bg-white focus:outline-none 
                                focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition ease-linear" required>
                                <option disabled selected value="">Please select a suitable tag for your event</option>
                                <option v-for="tag in this.tags" :key="tag" :value="tag">{{tag}}</option>
                            </select>
                        </div>
                    </div>
                    <button class="block rounded-md bg-secondary hover:bg-opacity-90 transition ease-linear text-white font-semibold w-11/12 text-lg my-5 h-10" type="submit">Create</button>
                </div>
            </form>
        </div>
        <!-- Preview of event? -->
        <div class="hidden lg:block h-108 mx-10 transition duration-200 ease-linear">
            <div class="c-card block bg-white bg-opacity-90 hover:bg-opacity-100 hover:shadow-2xl rounded-lg overflow-hidden transition duration-200 ease-linear">
                <div class="overflow-hidden h-56">
                    <img src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
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
import {  getFirestore, doc, collection, setDoc, getDocs,
    updateDoc, getDoc, arrayUnion, arrayRemove} from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth, firebaseApp } from '../firebase';
import router from '../router/index'

import Nav from "../components/Nav.vue"

const db = getFirestore(firebaseApp);

export default {
    name: 'CreateEvent',
    components: {
        Nav,
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
            tag: "",
            tags: []
        }
    },
    mounted() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })

        this.getTags();
    },
    methods: {
        async createEvent() {
            try {
                const eventRef = doc(collection(db, "events"));
                const setEvent = await setDoc(eventRef, {
                    userEmail: this.user.email,
                    title: this.title,
                    expiryDate: this.expiryDate,
                    location: this.location,
                    numOfParticipants: this.numOfParticipants,
                    currentNumOfParticipants: 1,
                    description: this.description,
                    postDate: new Date().getTime(),
                    participants: [],
                    requesters: [],
                    tag: this.tag
                })
                console.log(setEvent)
                const docRef = doc(db, "events", eventRef.id);
                const docSnap = await getDoc(docRef);
                const userRef = doc(db, "Users", this.user.email);
                const eventInfo = docSnap.data();
                eventInfo.id = eventRef.id;
                await updateDoc(userRef, {
                    created: arrayUnion(eventInfo),
                })
                this.$emit("updated")
                document.getElementById('createEventForm').reset();
                alert("Created event '" + this.title + "'")
                router.push('/home')
            } catch (err) {
                alert(err);
            }
        },
        async getTags() {
        const tagSnapshot = await getDocs(collection(db, "tags"));
        tagSnapshot.forEach((doc) => {
            this.tags.push(doc.id)
        })
    },
        async acceptApplicant(eventId, userEmail) {
            const eventRef = doc(db, "events", eventId);
            const accept = await updateDoc(eventRef, {
                requesters: arrayRemove(userEmail),
                participants: arrayUnion(userEmail)
            })
            const userRef = doc(db, "Users", userEmail);
            const userSnap = await getDoc(userRef);
            const userName = userSnap.name


            const docSnap = await getDoc(eventRef);
            const eventInfo = docSnap.data();
            eventInfo.id = eventRef.id;
            const updateUser = updateDoc(userRef, {
                created: arrayUnion(eventInfo),
            })
            console.log(accept)
            console.log(updateUser)
            this.$emit("updated")
            console.log(eventRef.id)
            alert("Accepted applicant '" + userName + "'")
        }
    }
}
</script>
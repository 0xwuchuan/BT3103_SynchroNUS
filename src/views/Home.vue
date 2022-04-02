<template>
    <Nav />
<<<<<<< HEAD
<<<<<<< HEAD
    <div class="flex flex-col justify-start h-5/6 mt-20 ml-10">
        <div v-if="isLoading" >
=======
    <div class="flex flex-col h-5/6 mt-20 ml-10">
=======
    <div class="flex flex-col h-5/6 ml-10">
>>>>>>> 9c7f39c (Styling changes)
        <!-- Filter Bar -->
        <!-- SkeletonLoader -->
        <SkeletonFilter v-if="isLoading"/>
        <!-- Actual Filter Bar -->
        <div v-else class="flex flex-row items-center w-23/24 bg-white bg-opacity-80 rounded-lg m-4 hover:bg-opacity-100 hover:shadow-2xl transition duration-200 ease-linear">
            <h3 class="text-xl font-mont text-black font-bold mx-4">Filter by tags :</h3>
                <button v-for="(tag, index) in tags" :key="tag" @click="toggleFilter(index)" :class="{'bg-primary': tag.active, 'bg-secondary': !tag.active}"   
                    class="flex flex-row rounded-full px-4 py-2 mx-1 font-bold text-white shadow-md hover:opacity-90 transition duration-100 ease-linear">
                    {{ tag.name }}
                    <svg v-if="tag.active" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
        </div>

        <!-- Events -->
        <div>
<<<<<<< HEAD
            <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:grid-cols-3">
>>>>>>> 82e00ca (Layout change + Add filter bar)
=======
            <div v-if="isLoading" class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:grid-cols-3">
>>>>>>> 9c7f39c (Styling changes)
            <!-- Skeleton Loader -->
                <div v-for="template in 6" :key="template" class="col-span-1">
                    <SkeletonEvent />
                </div>
            </div>
            <!-- Actual events -->
            <div v-else class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:grid-cols-3">
                <div v-for="event in events" :key="event.title" class="col-span-1 ">
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

    <!-- Create Event  -->
    <router-link to="/create">
        <button class="group flex items-center justify-center fixed bottom-10 right-10 rounded-lg h-16 w-64 font-mont text-lg font-bold
            text-white bg-gray-800 hover:bg-gray-700 transition duration-75 ease-linear transform 
            ">
            Create An Event
            <span class="duration-300 transform group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </span>
        </button>
    </router-link>
</template>

<script>
import {
  getFirestore,
  query,
  orderBy,
  collection,
  getDocs,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firebaseApp } from "../firebase";
import Event from "@/components/Event.vue";
import Nav from "@/components/Nav.vue";
import SkeletonFilter from "@/components/SkeletonFilter.vue"
import SkeletonEvent from "@/components/SkeletonEvent.vue"


const db = getFirestore(firebaseApp);

export default {
  name: "Home",
  components: {
    Event,
    Nav,
    SkeletonEvent,
    SkeletonFilter
  },
  data() {
    return {
      EventList: [],
      user: false,
      isLoading: true,
      filters: [],
      tags: []
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });

    this.getTags();
    this.getEventsByDate();
  },
  methods: {
    async getEventsByDate() {
      const eventRef = collection(db, "events");
      const q = query(eventRef, orderBy("postDate"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let eventInfo = doc.data();
        eventInfo.id = doc.id;
        this.EventList.push(eventInfo);
      });
      this.isLoading = false;
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
    async getTags() {
        const tagSnapshot = await getDocs(collection(db, "tags"));
        tagSnapshot.forEach((doc) => {
            this.tags.push({
                name: doc.id,
                active: false
            })
        })
    },
    toggleFilter(index) {
        this.tags[index].active = !this.tags[index].active
        let tag = this.tags[index].name
        if (this.tags[index].active) {
            this.filters.push(tag)
        } else {
            this.filters = this.filters.filter(f => f != tag)
        }
    }
  },
  computed: {
      events() {
          let events = [];
          if (this.filters.length) {
            for (let i = 0; i < this.filters.length; i++) {
              events = events.concat(this.EventList.filter(event => event.tag == this.filters[i]))
            }
            return events;
          }
          return this.EventList; // if there are no filters return eventlist
      }
  }
};
</script>
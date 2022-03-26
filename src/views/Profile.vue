<template>
    <Nav />    
    
    <div class="pt-10 px-10 main grid place-items-start h-screen ">
        
        <!--card-->
        <div class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-full">
            <!--profile-image-->
            <div class="profile mx-auto rounded-full py-2 w-16 "> 
                <img src="@/assets/avatar.png" alt="profile">
            </div>
            <!--name-->
            <div class="name text-gray-800 text-2xl font-medium mt-4 ">
                <p>Hello</p>
            </div>
            <!--year-->
            <div class="username text-gray-500">
                <p>Year 2</p>
            </div>
            <!--tagline-->
            <div class="work text-gray-700 mt-4">
                <p>I like getting good sleep 😴</p>
            </div>
            <!-- edit button -->
            <div class=" mt-8">
                <button class="inline-block bg-secondary hover:bg-yellow-500 py-2 px-4 text-white w-full font-semibold rounded-lg shadow-lg" type="button" data-modal-toggle="popup-modal">
                    Edit
                </button>


            <div id="popup-modal"  class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
            <div class="relative px-4 w-full max-w-md h-full md:h-auto">

            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-end p-2">
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            </div>
            <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Edit Profile Details</h3>
            <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
            <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Xing Wei">
            </div>
            <div>
            <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
            <input type="status" name="status" id="status" placeholder="I love to play sports" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" >
            
            
            </div>
            <div class="flex justify-between">
            <div class="flex items-start">
            
            
            </div>
            </div>
            <button @v-on:click="editUser(document.getElementById('name').value)" type="button" class="w-full text-white bg-secondary hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            </form>
</div>
</div>
</div>

            </div>
        </div>
        <br>
        <!--upcoming-->
        <div class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-full">
            <!--title-->
            <div class="name text-gray-800 text-2xl font-medium mt-4 ">
                <p>Upcoming</p>
                
            </div>
            <div class="container mx-auto">
                <div class="flex">
                <div v-for="event in Upcoming" :key="event.tit" class="inline-block">
                    <Event :tit = "event.tit" :description="event.description" :date="event.date" :link="event.link" :imageUrl="event.imageUrl"/>
                </div>
                </div>
            </div>
            <button class="text-xs bg-secondary hover:bg-yellow-500 py-2 px-4 text-white w-full font-semibold rounded-lg shadow-lg">
                See all
            </button>         
        </div>
        <br>
        <!--saved-->
        <div class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-full">
            <!--title-->
            <div class="name text-gray-800 text-2xl font-medium mt-4 ">
                <p>Saved</p>
            </div>
            <div class="container mx-auto">
                <div class="flex">
                <div v-for="event in Saved" :key="event.tit" class="inline-block">
                    <Event :tit = "event.tit" :description="event.description" :date="event.date" :link="event.link" :imageUrl="event.imageUrl"/>
                </div>
                </div>
            </div> 
            <button class="text-xs bg-secondary hover:bg-yellow-500 py-2 px-4 text-white w-full font-semibold rounded-lg shadow-lg">
                See all
            </button> 
        </div>
        <br>
        <!--created events-->
        <div class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-full">
            <!--title-->
            <div class="name text-gray-800 text-2xl font-medium mt-4 ">
                <p>Created</p>
            </div>
            <div class="container mx-auto">
                <div class="flex">
                <div v-for="event in Created" :key="event.tit" class="inline-block">
                    <Event :tit = "event.tit" :description="event.description" :date="event.date" :link="event.link" :imageUrl="event.imageUrl"/>
                </div>
                </div>
            </div> 
            <button @click="seeCreated" class="text-xs bg-secondary hover:bg-yellow-500 py-2 px-4 text-white w-full font-semibold rounded-lg shadow-lg">
                    See all
            </button> 
        </div>
        <div>
            <br>
        </div>

    </div>
    
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import Nav from "../components/Nav.vue"
import Event from '@/components/Event.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import router from '../router/index'
import { doc, getDoc } from "firebase/firestore";
//const db = getFirestore(firebaseApp);
//const eventsRef = collection(db, "Events");
// import { updateProfile } from "firebase/auth";
const db = getFirestore(firebaseApp);


export default {
    name: 'Profile',

    components: {
        Nav,
        Event
    },
    data() {
    return {
      Created: 
      //query(eventsRef, where("userId", "==", String(this.user.uid)
      [
      {
        tit: "Gym Session@UHC",
        description: "testing",
        date: "19 Mar 2022",
        link: "page1",
        imgUrl: "58159270-01.jpeg"
      },
      {
        tit: "NUS HackStack Hackathon",
        description: "hackerman",
        date: "20 Mar 2022",
        link: "www.google.com",
        imgUrl: "58159270-01.jpeg"
      },
      ],
      Saved: 
      //user.saved
      [
      {
        tit: "Gym Session@UHC",
        description: "testing",
        date: "19 Mar 2022",
        link: "page1",
        imgUrl: "58159270-01.jpeg"
      },
      {
        tit: "NUS HackStack Hackathon",
        description: "hackerman",
        date: "20 Mar 2022",
        link: "www.google.com",
        imgUrl: "58159270-01.jpeg"
      },
      ],
      Upcoming:
      //user.upcoming 
      //query(eventsRef, where(String(this.user.uid) in "attendees")) 
      //- i think we decided on going through all the events to get which events have the user id in attendees but a bit inefficient eh 
      [
      {
        tit: "Gym Session@UHC",
        description: "testing",
        date: "19 Mar 2022",
        link: "page1",
        imgUrl: "58159270-01.jpeg"
      },
      {
        tit: "NUS HackStack Hackathon",
        description: "hackerman",
        date: "20 Mar 2022",
        link: "www.google.com",
        imgUrl: "58159270-01.jpeg"
      },
      ],
      //query(eventsRef, where("userId", "==", String(this.user.uid)
      user: false,
      isFullUpcoming: false,
      isFullSaved: false,
      isFullCreated: false,


    }
  },
  methods: {
      checkAuthStatus() {
            return new Promise( (resolve, reject) => {
                try{
                    const auth = getAuth() 
                    onAuthStateChanged(auth, (user) => {
                        this.fbuser = user.email
                        this.user = user
                        resolve(user)
                    })
                } catch (err) {
                    reject(err)
                }
            })
        },

        seeCreated() {
            router.push('/created')
        },
        editUser(newName) {            
            db.collection("Users").doc(this.user.email).update({name: newName});
        }
  },

    async mounted() {
        this.user = await this.checkAuthStatus()    
        console.log(this.user)
        console.log(this.user.email)
        const userRef = await doc(db, "Users", String(this.fbuser))
        const userDoc = await getDoc(userRef)
        console.log(userDoc)
    
        //this.userRef = getDocs(collection(db, "Users"))
        if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log(userData);
        } else {
            console.log("No such document!");
        }


    }
}


</script>

<style>

</style>
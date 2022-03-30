<template>
    <div class="pt-10 px-10 main grid place-items-start h-fit ">
    <!--upcoming-->
        <div class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-full">
            <!--title-->
            <div class="name text-gray-800 text-2xl font-medium mt-4 ">
                <p>Upcoming</p>
            </div>
            <div class="container mx-auto">
                <div class="flex">
                <!-- TO-DO: CUTOFF at 4 events -->
                <div v-for="event in Upcoming" :key="event.title" class="inline-block w-100">
                    <Event :tit="event.title" :description="event.description" :date="event.date" :link="event.link" :imageUrl="event.imageUrl"/>
                </div>
                </div>
            </div>
            <button @click="seeUpcoming" class="text-xs bg-secondary hover:bg-yellow-500 py-2 px-4 text-white w-full font-semibold rounded-lg shadow-lg">
                See all
            </button>         
        </div>
    </div>
    <div class="pt-10 px-10 main grid place-items-start h-fit ">
        <!--saved-->
        <div class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-full">
            <!--title-->
            <div class="name text-gray-800 text-2xl font-medium mt-4 ">
                <p>Saved</p>
            </div>
            <div class="container mx-auto">
                <div class="flex">
                <div v-for="event in Saved" :key="event.title" class="inline-block w-100">
                    <Event :tit = "event.title" :description="event.description" :date="event.date" :link="event.link" :imageUrl="event.imageUrl"/>
                </div>
                </div>
            </div> 
            <button @click="seeSaved" class="text-xs bg-secondary hover:bg-yellow-500 py-2 px-4 text-white w-full font-semibold rounded-lg shadow-lg">
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
            <div class="flex">
            <div v-for="event in Created" :key="event.title" class="inline-block w-100">
                <Event :tit = "event.title" :description="event.description" :date="event.date" :link="event.link" :imageUrl="event.imageUrl"/>
            </div>
            </div>
        </div> 
        <button @click="seeCreated" class="text-xs bg-secondary hover:bg-yellow-500 py-2 px-4 text-white w-full font-semibold rounded-lg shadow-lg">
                See all
        </button> 
    </div>
    </div>
    <br>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import router from '../router/index'
import Event from '@/components/Event.vue'



export default {
    name: 'MyEvents',

    components: {
        Event,

    },
    data() {
    return {
      refreshComp: 0,
      user: false,
      userVerified: false,
      userEmail: "",
      userName: "",
      userGender: "",
      userTeleHandle: "",
      userYear: "",
      userUpcoming: "",
      userSaved: "",
      userCreated: ""
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
        //TO-DO: display cut off at 4 events
        seeCreated() {
            router.push('/created')
        },

        seeSaved() {
            router.push('/created')
        },

        seeUpcoming() {
            router.push('/created')
        },

        // async query(collection, attribute, condition, condition2) {
        //     const queried = []
        //     const q = query(collection(db, collection), where(attribute, condition, condition2));
        //     const createdSnapshot = await getDocs(q);
        //     createdSnapshot.forEach((doc) => {
        //         queried.push(doc.data());
        //     });
        //     return queried
        // },
  }
}
</script>

<style>

</style>
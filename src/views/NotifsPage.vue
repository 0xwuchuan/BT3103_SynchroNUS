<template>
  <Nav/>
  <h1 class="text-3xl text-center font-bold mt-10 text-white max-w-fit font-mont"><b>Notifications</b></h1> 
  
  <!-- <div class="flex flex-row justify-center space-x-3">-->
  <div class="flex flex-col justify-left items-center font-mont">
        <div class="flex flex-col bg-white rounded-lg filter drop-shadow-md p-2 rounded text-700 bg-50 border-900/10 w-100 font-mont">
            <h5 class="font-mont pl-2"> Comments </h5>
            <div v-for="comment in CommentList" :key="comment.id" class="items-center object-center position-static ">
                <div v-if="comment.user != this.user.email">
                <div class="object-center"> 
                <CommNotif
                    :user="comment.user"
                    :text="comment.text"
                    :link="'eventpage/'+comment.eventid"
                />
                </div>
                </div>
            </div>   
        </div>
  </div>

  <br>

  <div class="flex flex-col items-center"> 
    <div class="flex flex-col bg-white rounded-lg filter drop-shadow-md p-2 rounded text-700 bg-50 border-900/10 w-100 font-mont">
        <h5 class="font-mont pl-2"> Requests </h5>
        <div v-for="obj in Object.keys(ReqList)" :key="obj" >     <!-- object.keys creates an array of event names -->
            <div v-for="requester in ReqList[obj]" :key="requester">
            <ReqNotif
                :user="requester"
                :link="'eventpage/'+obj.split(',')[0]"
                :eventname="obj.split(',')[1]"
            />
        </div>
        </div>
    </div>
  </div>

</template>

<script>
import Nav from '../components/Nav'
import {
  getFirestore,
  collection,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firebaseApp } from "../firebase";
import CommNotif from "@/components/CommNotif.vue";
import ReqNotif from "@/components/ReqNotif.vue";

const db = getFirestore(firebaseApp);

export default {
    name: "NotifsPage",
    components: {
        Nav,
        CommNotif,
        ReqNotif,
    },

    data() {
        return {
            EventsByMe: [],
            CommentList: [],
            ReqList: {},

            user: false
        }
    },
    mounted() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        });
        this.getEventsByMe();
        this.notifyComments();
        this.getRequesters();
    },

    methods: {
        async getEventsByMe() {
            const eventRef = collection(db, "events");
            const q = await getDocs(eventRef);
            
            q.forEach((doc) => {
                let event = doc.data();
                event.id = doc.id;
                console.log(event.id)
                if (event.userEmail == this.user.email || event.userId == this.user.uid) { // saved all events i made
                    this.EventsByMe.push(event.id);
                }
            });
        },

        async notifyComments() {
            const comRef = collection(db, "comments");
            const q = query(comRef, orderBy("commentedAt", "desc"));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                let comInfo = doc.data();
                comInfo.id = doc.id;
                if (this.EventsByMe.includes(comInfo.eventid)) {    // if i made this event, pushes comment info
                    this.CommentList.push(comInfo);
                }
            }
            );
        },

        async getRequesters() {
            const eventRef = collection(db, "events");
            const q = query(eventRef, orderBy("postDate"));
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
                
                let event = doc.data();
                event.id = doc.id;
                if (event.userEmail == this.user.email) { // if this user made the event
                    const temptt = event.title;
                    this.ReqList[[event.id, temptt]] = event.requesters
                }
            });
            
        }          
                 
    },
};
</script>
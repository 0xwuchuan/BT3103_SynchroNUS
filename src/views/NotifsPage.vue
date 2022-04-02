<!-- change to page with components -->
<template>
  <Nav/>
  <h1 class="text-3xl text-center font-bold mt-10 text-white max-w-fit">Notifications</h1> 
  
  <!-- <div class="flex flex-row justify-center space-x-3">-->
  <div class="flex flex-col justify-left items-center max-h-fit max-w-fit">
        <div class="flex flex-col bg-white rounded-lg filter drop-shadow-md max-w-fit max-h-fit p-8">
            <h5> Comments </h5>
            <div v-for="comment in CommentList" :key="comment.id" class="items-center object-center position-static ">
                <div class="object-center"> 
                <CommNotif
                    :user="comment.user"
                    :text="comment.text"
                />
                </div>
            </div>   
        </div>
  </div>

  <br>

  <div class="flex flex-col items-center max-h-fit max-w-fit">
    <div class="flex flex-col bg-white rounded-lg filter drop-shadow-md max-w-fit max-h-fit p-8">
        <h5> Requests </h5>
        <div v-for="obj in Object.keys(ReqList)" :key="obj" >     <!-- object.keys creates an array of event names -->
            <div v-for="requester in ReqList[obj]" :key="requester">
            <ReqNotif
                :user="requester"
                :eventname="obj"
            />
        </div>
        </div>
    </div>
  </div>
  
 
</template>

<script>
//import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../firebase';

import Nav from '../components/Nav'
// import NotifPage from '../components/NotifPage'
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

        this.notifyComments();
        this.getRequesters();
    },

    methods: {
        async notifyComments() {
            // for now this method is just taking comments from the collection itself
            // TEMP
            // later edit to take from if user created the event 
            const comRef = collection(db, "comments");
            const q = query(comRef, orderBy("commentedAt"));
            const querySnapshot = await getDocs(q);
            // const eventRef = collection(db, "events");
            // const eventDoc = await getDocs(eventRef);
            // console.log(this.userEmail)
            // eventDoc.forEach((doc) => {
            //     let event = doc.data;
            //     event.id = doc.id;
            //     if (event.userEmail == this.uEmail) { // saved all events i made
            //         this.EventsByMe.push(event.id);
            //     }
            // });

            // check for this.userEmail ?


            // check if changing to comment array in event --> then change method to print out the comments
            querySnapshot.forEach((doc) => {
                // if this user made the event
                let comInfo = doc.data();
                comInfo.id = doc.id;
                // if (this.EventsByMe.includes(comInfo.eventid)) {    // if i made this event, pushes comment info
                // console.log(comInfo);
                    this.CommentList.push(comInfo);
                }
            // }
            );
        },

        async getRequesters() {
            // check backend for request --> isit just add to the array
            const eventRef = collection(db, "events");
            const q = query(eventRef, orderBy("postDate"));
            const querySnapshot = await getDocs(q);
            console.log(this.userEmail)
            querySnapshot.forEach((doc) => {
                
                let event = doc.data();
                event.id = doc.id;
     
                if (event.userEmail == this.userEmail) { // if this user made the event
                    const temp = event.title;
                    this.ReqList[temp] = event.requesters
                // this.ReqList.push(eventInfo);
                    // let reqArray = event.requesters
                    // for (let userID of reqArray) {
                    //     this.ReqList[event.title].push(userID);
                    // }
                }
                console.log(this.ReqList);
            });
            
        } 
        // async getRequesters() {
        //     const eventRef = collection(db, "events");
        //     const querySnapshot = await getDocs(eventRef);
        //     querySnapshot.forEach((doc) => {
        //         let eventInfo = doc.data();
        //         eventInfo.forEach((field) => {
        //             reqArray = eventInfo.requesters;
        //              reqArray.forEach((userID) => {
        //                  this.ReqList.push(userID);});});}
                     
                 
    },
};
</script>
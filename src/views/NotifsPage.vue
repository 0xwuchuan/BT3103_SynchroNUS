<!-- change to page with components -->
<template>
  <Nav/>
  <h1 class="text-3xl text-center font-bold mt-10 text-white max-w-fit">Notifications</h1> 
  
  <!-- <div class="flex flex-row justify-center space-x-3">-->
  <div class="flex flex-col justify-left items-center max-h-fit max-w-fit">
        <div class="flex flex-col bg-white rounded-lg filter drop-shadow-md max-w-fit max-h-fit p-8">
            <h5> Comments </h5>
            <div v-for="comment in CommentList" :key="comment.id" class="items-center object-center position-static">
                <div class="object-center"> 
                <CommNotif
                    :user="comment.user"
                />
                </div>
            </div>   
        </div>
  </div>

  <br>

  <div class="flex flex-col items-center max-h-fit max-w-fit">
    <div class="flex flex-col bg-white rounded-lg filter drop-shadow-md max-w-fit max-h-fit p-8">
        <h5> Requests </h5>
        <div v-for="requester in ReqList" :key="requester.id">
            <ReqNotif
                :user="requester"
            />
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
  getDocs,
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
            CommentList: [],
            ReqList: [],
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
            const comRef = collection(db, "comments");
            const querySnapshot = await getDocs(comRef);
            querySnapshot.forEach((doc) => {
                let comInfo = doc.data();
                comInfo.id = doc.id;
                console.log(comInfo);
                this.CommentList.push(comInfo);
            });
        },

        async getRequesters() {
            const eventRef = collection(db, "events");
            const querySnapshot = await getDocs(eventRef);
            querySnapshot.forEach((doc) => {
                // console.log(doc.user);
                  
                let event = doc.data();
                event.id = doc.id;
                if (event.userId == this.user.uid) { // if this user made the event
                    
                // this.ReqList.push(eventInfo);
                    let reqArray = event.requesters
                    for (let userID of reqArray) {
                        this.ReqList.push(userID);
                    }
                }

            });
            console.log("this is "+ this.ReqList);
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
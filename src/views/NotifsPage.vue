<template>
  <Nav/>
  <h1 class="text-3xl text-center font-bold mt-10 text-white max-w-fit font-mont"><b>Notifications</b></h1> 
  
  <div class="flex flex-col justify-left items-center font-mont">
      <div class="flex flex-col bg-white rounded-lg filter drop-shadow-md p-2 text-700 bg-50 border-900/10 w-100 font-mont">
  <h5 class="font-mont pl-2 text-center"> Events you've joined </h5>
  <div v-for="obj in Object.keys(Participants)" :key="obj" class="items-center object-center position-static">
        <div v-if="this.user.email == obj">
                <AcceptedNotif
                    :eventname="Participants[obj][0]"
                    :creatortele="Participants[obj][1]"
                    :link="'eventpage/'+Participants[obj][2]"
                />
            </div> 
            </div>
      </div>
       
<br>
        
  </div>

  <!-- <div class="flex flex-row justify-center space-x-3">-->
  <div class="flex flex-col justify-left items-center font-mont">
        <div class="flex flex-col bg-white rounded-lg filter drop-shadow-md p-2 text-700 bg-50 border-900/10 w-100 font-mont">
        <h5 class="font-mont pl-2 text-center">Your events</h5>
            <h6 class="font-mont pl-2"> Comments </h6>
            <div v-for="comment in CommentList" :key="comment.id" class="items-center object-center position-static ">
                <div v-if="comment.user != this.user.email">
                <div class="object-center"> 
                <CommNotif
                    :user="comment.username"
                    :text="comment.text"
                    :link="'eventpage/'+comment.eventid"
                />
                </div>
                </div>
            </div>  
            <br>
            <h6 class="font-mont pl-2"> Requests </h6>
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
import AcceptedNotif from "@/components/AcceptedNotif.vue";


const db = getFirestore(firebaseApp);

export default {
    name: "NotifsPage",
    components: {
        Nav,
        CommNotif,
        ReqNotif,
        AcceptedNotif
 
    },

    data() {
        return {
            EventsByMe: [],
            CommentList: [],
            ReqList: {},
            idHandle: {},
            Participants: {},


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
        this.getContact();
        this.notifyComments();
        this.getRequesters();
        this.getParticipants();
        
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
        },   
        
        async getParticipants() {
            const eventRef = collection(db, "events");
            const q = query(eventRef, orderBy("postDate"));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((docu) => {
                let event = docu.data();
                event.id = docu.id;
                const creatorHandle = this.idHandle[event.id]

                if (event.participants.length > 0) {
                    
                    for (let person of event.participants) {
                        console.log(person)
                        this.Participants[person.email] = [event.title, creatorHandle, event.id]
                    
                    }
                    console.log(this.Participants)
                    console.log(Object.keys(this.Participants))
                }

            });
        },

        // async getNameofEventId() {
        //     const eventRef = collection(db, "events");
        //     const q = query(eventRef);
        //     const querySnapshot = await getDocs(q);

        //     querySnapshot.forEach((doc) => {
        //         let event = doc.data()
        //         event.id = doc.id
        //         this.idName[event.id] = event.title
        //     }
        //     )
        // },

        async getContact() {
            const userRef = collection(db, "Users")
            const q = query(userRef)
            const querySnapshot2 = await getDocs(q);
            
            querySnapshot2.forEach((doc) => {
                let user = doc.data();
                user.id = doc.id;
                for (let id of user.created) {
                    this.idHandle[id] = user.teleHandle
                }
            })
            
        }
             
    },

    

};


</script>
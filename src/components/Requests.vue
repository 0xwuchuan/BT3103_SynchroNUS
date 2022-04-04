<template>
  <div class="flex flex-col bg-white bg-opacity-60 rounded-lg mb-5 pb-2">
      <h3 class="text-2xl font-bold font-mont mx-5">Current Requests</h3>
      <h3 v-if="!this.requesters.length" class="font-mont text-xl mx-5">There are currently no requests!</h3>
      <div v-for="request in requesters" :key="request">
          <div class="flex flex-row justify-between items-center mx-3 my-2 p-3 bg-white bg-opacity-70 rounded-2xl" >
                <span class="ml-2"><span class="font-bold">Request from: </span>  {{ request.name }}</span>
                <button class="bg-green-400 rounded-full px-4 py-2 h-10 font-bold"
                    @click="acceptApplicant(request, eventid)">
                    Accept Request
                </button>
          </div>
      </div>
  </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
    name: "Requests",
    props: {
        requesters: Array,
        eventid: String
    },
    methods: {
        async acceptApplicant(user, eventId) {
            console.log(user, eventId)
            const eventRef = doc(db, "events", eventId);
            await updateDoc(eventRef, {
                requesters: arrayRemove(user),
                participants: arrayUnion(user)
            })
            const eventSnap = await getDoc(doc(db, "events", eventId))
            const userRef = doc(db, "Users", user.email)
            const eventInfo = eventSnap.data();
            eventInfo.id = eventRef.id;
            await updateDoc(userRef, {
                upcoming: arrayUnion(eventInfo),
            })
            alert("User accepted")
            this.$emit("applicantAccepted");
      },
    }
}
</script>

<style>

</style>
<template>
<div class="space-y-5">
    <div
    class="p-4 border rounded text-700 bg-50 border-900/10 w-100 object-position:left"
    role="alert"
    >
    <strong class="text-sm font-medium"> User commented on your event </strong>
    </div>

    <div
    class="p-4 border rounded text-700 bg-50 border-900/10 w-100 object-position:left"
    role="alert"
    >
    <strong class="text-sm font-medium"> User commented on your event </strong>
    </div>

    <div
    class="p-4 text-800 border rounded border-900/10 bg-50 w-100"
    role="alert"
    >
    <strong class="text-sm font-medium"> Your request to join xx was accepted </strong>
    </div>

    <div
    class="p-4 border rounded text-700 bg-50 border-900/10 w-100"
    role="alert"
    >
    <strong class="text-sm font-medium"> User requested to join your event </strong>
    </div>

</div>
    <!-- if commented
    <div class="text">
        <h5>User commented on your event</h5>
    </div>

    
    <div class="text">
        <h5>User requested to join your event</h5>
    </div>

   
    <div class="text">
        <h5>Your request to join Event was accepted</h5>
    </div>-->
  

</template>

<script>
import {firebaseApp, auth} from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore";
// import { getAuth } from "firebase/auth";


export default {
    name: 'singleNotif',
    props: ['notif'],

    mounted(){
        const db = getFirestore(firebaseApp);
        

    async function comment(){
        var user = auth.currentUser;
        let z = getDocs(collection(db, user))

        z.forEach((docs) => {
            let yy = docs.data()
            var username = (yy.username)
            var reply = (yy.content)

            var bu = document.createElement("text")
            bu.innerHTML = username + " commented " + reply + " on your event";
        })

    }

    comment()
    },

    commentNotif: function(){
        this.$root.$emit('Comments')
        console.log("here")
    },


}



</script>

<style scoped>
.text {
    /* display: flex; */
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    max-width: 15cm;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    
    margin-bottom: 10px;
    color: #333;
    background-color: #F2F2F2;
    border-radius: 30px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

</style>
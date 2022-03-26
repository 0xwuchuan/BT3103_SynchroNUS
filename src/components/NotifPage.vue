<template>

<div class="flex flex-col justify-center items-center max-h-fit max-w-fit">
  <h1 class="text-3xl font-bold mt-10 text-white items-center max-w-fit mr-96">Notifications</h1>   
    <div class="flex flex-col items-center bg-white rounded-lg filter drop-shadow-md max-w-fit max-h-fit">
      <div class="notifs">
      <Notif/>
      <div :class="notif_wrapper">
      <single-notif
        v-for="notif in notifs"
                :notif="notif"
                :key="notif.id"
      ></single-notif>
      </div>
      </div>
    </div>
</div>


</template>

<script>
// import { useRouter } from 'vue-router';
// import firebaseApp from '../firebase.js';
// import { collection, getDocs } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import Notif from './Notif'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase';
// import VueNotifications from 'vue-notification';

export default {

    name: 'NotifPage',
    components: {
      Notif
    },

    data() {
        return {
            notifs: [
              {
                text: "notif 1",
              },
              {
                text: "notif 2",
              },

            ]
        }
    },

    mounted() {

        onAuthStateChanged(auth, (user) => {
            if(user) {
                this.user = user;
            }
        })
    },


    

    /*data () {
        return {
          text: "",
        }
    },*/

    /*mounted() {
        const db = getFirestore(firebaseApp);
        const auth = getAuth();*/
        
      
    /*methods : {
        async commentHandler(){
            var user = auth.currentUser.email;
            const auth = getAuth();
            let z = await getDocs(collection(user))
            
            z.forEach((docs) => {
                let yy = docs.data()
                var username = (yy.username) // ?? how to get this
                document.getElementById("id").innerHTML = (String(username) + " commented on your event")
                // replace id name
            })

        }
  }*/

}

</script>

<style scoped>


.notifs{
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 85px;
  padding-right: 85px;
  position: static;
  bottom: 0;
  right: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

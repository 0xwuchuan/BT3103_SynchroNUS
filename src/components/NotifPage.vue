<template>
  <div class="notifs">
    <Notif/>
  </div>
</template>

<script>
// import { useRouter } from 'vue-router';
// import firebaseApp from '../firebase.js';
// import { collection, getDocs } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import Notif from './Notif'
// import { getFirestore } from "firebase/firestore"
// import { auth } from '../firebase';
// import VueNotifications from 'vue-notification';

export default {

    name: 'NotifPage',
    components: {
      Notif
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
  position: static;
  bottom: 0;
  right: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

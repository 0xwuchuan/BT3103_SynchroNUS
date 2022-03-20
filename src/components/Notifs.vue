<template>
    <h1>This is the Notifications page</h1>
    <div class="save">
        <button id = "savebutton" type="button" v-on:click="commentHandler()">  Save  </button>
    </div>
    <div class="save">
        <button id = "savebutton" type="button" v-on:click="acceptedEvent()">  Save  </button>
    </div>
    <div class="save">
        <button id = "savebutton" type="button" v-on:click="requestedEvent()">  Save  </button>
    </div>
</template>

<script>
// import { useRouter } from 'vue-router';
//import firebaseApp from '../firebase.js';
import { collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"
// import { auth } from '../firebase';
// import VueNotifications from 'vue-notification';

export default {

    name: 'Notifs',

    data () {
        return {
        text: "",
        }
    },

    /*mounted() {
        const db = getFirestore(firebaseApp);
        const auth = getAuth();*/
        
        
    

    methods : {
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
  }

}


  /*notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: 'Hello there',
      message: 'That\'s the success!'
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: 'Hey you',
      message: 'Here is some info for you'
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      title: 'Wow, man',
      message: 'That\'s the kind of warning'
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: 'Wow-wow',
      message: 'That\'s the error'
    }
  }
}*/
</script>

<!-- change to page with components -->
<template>
  <Nav/>
  <NotifPage/>

</template>

<script>
//import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../firebase';

import Nav from '../components/Nav'
import NotifPage from '../components/NotifPage'


export default {
    name: "NotifsPage",
    components: {
        Nav,
        NotifPage,
    },

    /*data() {
        return {
            user: false,
        }
    },
    mounted() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
    },*/
}
</script>
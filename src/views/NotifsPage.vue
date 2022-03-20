<!-- change to page with components -->

<template>
  <Nav/>
  <div class="flex flex-col justify-center items-center h-screen">
    <p class="text-white text-3xl">Notifs will be displayed here</p>
  </div>
  <Notifs/>

</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import Nav from '../components/Nav'
import Notifs from '../components/Notifs'


export default {
    name: "NotifsPage",
    components: {
        Nav,
        Notifs,
    },
    data() {
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
    },
}
</script>
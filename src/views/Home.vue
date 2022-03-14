<template>
  <Nav />
  <div class="flex flex-col justify-center items-center h-screen">
    <p class="text-white text-3xl">Events will be displayed here</p>
  </div>

</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import Nav from '../components/Nav'


export default {
    name: "Home",
    components: {Nav},
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

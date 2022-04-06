<template>
    <Nav />
    <div class="flex flex-col h-5/6">
        <EventDetails 
        :id="this.id"
        />
    </div>
</template>

<script>
import Nav from "../components/Nav";
import EventDetails from "../components/EventDetails";
import {useRoute} from 'vue-router';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default {
  name: 'EventPage',
  components: {
      Nav,
      EventDetails
  },
  data() {
    return {
      id: '',
      user: false
    }
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        console.log(this.user)
      }
    })
  },
  beforeMount(){
    const route = useRoute();
    console.warn("route",route.params);
    this.id = route.params.id;
    console.log(this.id);
  }
}
</script>

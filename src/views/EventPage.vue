<template>
    <Nav />
    <EventDetails 
    :id="id"
    />
    <CommentSection />
</template>

<script>
import Nav from "../components/Nav";
import EventDetails from "../components/EventDetails";
import CommentSection from '@/components/CommentSection.vue';
import {useRoute} from 'vue-router';


export default {
  name: 'EventPage',

  components: {
      Nav,
      EventDetails,
      CommentSection
  },
  data() {
    return {
      id: ''
    }
  },
  mounted(){
    const route = useRoute();
    console.warn("route",route.params);
    this.id = route.params.id;
    console.log(this.profile);
  }
}
</script>

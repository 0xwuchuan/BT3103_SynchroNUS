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

export default {
  name: 'EventPage',
  components: {
      Nav,
      EventDetails
  },
  data() {
    return {
      id: ''
    }
  },
  beforeMount(){
    const route = useRoute();
    console.warn("route",route.params);
    this.id = route.params.id;
    console.log(this.id);
  }
}
</script>

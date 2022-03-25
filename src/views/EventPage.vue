<template>
    <Nav />
    <EventDetails />
    <CommentSection />
</template>

<script>
import Nav from "../components/Nav";
import EventDetails from "../components/EventDetails";
import CommentSection from '@/components/CommentSection.vue';


export default {
  name: 'EventPage',
  components: {
      Nav,
      EventDetails,
      CommentSection
  }
}
</script>

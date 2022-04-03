<template>
    <Nav />    
    <ProfileCard @updated="change"/>
    <MyEvents :key="refreshComp"/> 
</template>

<script>
import Nav from "../components/Nav.vue"
import ProfileCard from '@/components/ProfileCard.vue'
import MyEvents from '@/components/MyEvents.vue'

export default {
    name: 'Profile',

    components: {
        Nav,
        ProfileCard,
        MyEvents
    },
    data() {
    return {
      refreshComp: 0,
    }
  },
  methods: {
    change(){
    this.refreshComp += 1
    },
  }
}
</script>

<style>

</style>
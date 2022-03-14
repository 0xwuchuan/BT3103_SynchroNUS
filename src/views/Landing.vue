<template>
  <Nav />
  <div class="flex flex-col justify-center items-center h-screen">
      <p class="text-white text-3xl">Welcome to SynchroNUS, <router-link class="text-primary" to='/login'>login here</router-link></p>
      <!-- <router-link to="/create">Create Event</router-link> -->
  </div>
</template>

<script>
import Nav from "../components/Nav.vue"

export default {
    name: 'Landing',
    components: {
        Nav
    }
}
</script>

<style>

</style>
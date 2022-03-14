<template>
  <Nav />
  <div>
      <p class="text-white text-3xl">Welcome to SynchroNUS, <router-link class="text-primary" to='/login'>login here</router-link></p>
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
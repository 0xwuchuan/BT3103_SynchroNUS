<template>
  <Nav />
  Welcome to SynchroNUS, <router-link to="/login">Login here </router-link>
</template>

<script>
import Nav from '../components/Nav'

export default {
    name: "Home",
    components: {Nav}
}
</script>

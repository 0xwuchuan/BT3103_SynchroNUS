<template>
  <div class="flex justify-center bg-gradient-to-r from-blue-400 to-yellow-400 items-center h-screen">
    <Login />
  </div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Login,
  }
}
</script>


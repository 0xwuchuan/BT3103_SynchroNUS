<template>
  <div class="flex justify-center bg-blue-800 items-center h-screen">
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


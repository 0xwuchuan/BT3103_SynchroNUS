<template>
  <div class="flex flex-col justify-center bg-gradient-to-r from-blue-400 to-yellow-400 items-center h-screen">
    <nav class="fixed w-full top-0 p-5 flex justify-between">
      <router-link class="text-xl" to="/">SynchroNUS</router-link>
      <div>
        <router-link class="text-xl px-3" to="/login">Login</router-link>
        <router-link class="text-xl px-3" to="/signup">Signup</router-link>
      </div>
    </nav>
    <!-- Check condition for whether user is logged in then can remove? -->
    <!-- Router views most likely belong in a nav -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>


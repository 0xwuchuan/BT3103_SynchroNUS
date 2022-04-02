<template>
  <div class="flex flex-col justify-center items-center h-full">
      <img src="../assets/3.1.png" alt="Logo">
      <p class="text-white text-xl font-bold">
        SynchroNUS is a platform for NUS students to seek like-minded peers by publishing events on the platform 
      </p>
      <router-link class="text-primary" to='/login'>
        <button class="rounded-lg bg-secondary px-5 py-2 font-bold text-black text-xl font-mont
            hover:bg-opacity-80 transition duration-150 ease-linear">
            Start now
        </button>
      </router-link>
  </div>
</template>

<script>

export default {
    name: 'Landing',
    components: {
    }
}
</script>

<style>

</style>
<template>
  <div class="flex flex-col justify-center items-center h-full">
      <img src="../assets/3.1.png" alt="Logo">
      <span class="text-white text-xl font-bold my-3">
        Ooops, page not found. 
      </span>
      <span class="text-white text-md mb-3">
        Are you sure you are at the right page?
      </span>
      <router-link class="text-primary" to='/home'>
        <button class="rounded-lg bg-secondary px-5 py-2 font-bold text-black text-xl font-mont
            hover:bg-opacity-80 transition duration-150 ease-linear">
            Go home
        </button>
      </router-link>
  </div>
</template>

<script>

export default {
    name: 'Not Found',
    components: {
    }
}
</script>

<style>

</style>
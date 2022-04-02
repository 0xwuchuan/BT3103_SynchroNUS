<template>
    <div v-if="!isLoading" class="flex flex-row items-center w-23/24 bg-white bg-opacity-30 rounded-lg m-4 
        hover:bg-opacity-100 hover:shadow-2xl transition duration-200 ease-linear"> 
        <span class="h-16"></span>    
    </div>
</template>

<script>
export default {
    name: "SkeletonFilter"
}
</script>

<style>

</style>
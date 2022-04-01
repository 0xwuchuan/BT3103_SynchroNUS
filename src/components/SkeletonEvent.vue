<template>
  <div class="flex-shrink w-full p-4">
        <a class="c-card block bg-white bg-opacity-20 shadow-md rounded-lg">
            <div class="relative pb-48 overflow-hidden bg-white bg-opacity-10 "></div>
            <div class="p-4">
                <div class="bg-orange-200 bg-opacity-20 rounded-full w-14 h-5"></div>
                <h3 class="bg-primary bg-opacity-20 px-4y w-full rounded-lg shadow-lg h-8"></h3>
                <p class="bg-blue-300 bg-opacity-20 px-4y w-32 rounded-lg shadow-lg h-5"></p>
                <div class="mt-3 flex items-center">
                    <button class="bg-secondary bg-opacity-20 px-4y w-full rounded-lg shadow-lg h-10" type="button" data-modal-toggle="authentication-modal">
                    </button>
                </div>
            </div>
            <div class="p-4 flex items-center text-sm text-gray-600">
                <span class="bg-blue-300 bg-opacity-20 px-4y w-32 rounded-lg shadow-lg h-5"></span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "SkeletonLoader",
}
</script>

<style>
</style>
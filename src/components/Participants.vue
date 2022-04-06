<template>
    <div class="flex flex-col bg-white bg-opacity-60 rounded-lg mb-5 pb-2">
      <h3 class="text-2xl font-bold font-mont mx-5">Current Participants</h3>
      <h3 v-if="!participants.length" class="font-mont text-xl mx-5">There are currently no participants!</h3>
      <div v-for="participant in participants" :key="participant">
          <div class="flex flex-row justify-between items-center mx-3 my-2 p-3 bg-white bg-opacity-70 rounded-2xl" >
                <span class="font-bold ml-2">Name: {{ participant.name }}</span>
                <span class="font-bold ml-2">Telegram handle: @{{participant.teleHandle}}</span>
                
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Participants',
    props: {
        participants: Array
    },
}
</script>

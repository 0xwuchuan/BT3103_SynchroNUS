<template>
    <div class="h-100 p-4 transition duration-200 ease-linear">
        <a :href="link" class="c-card block bg-white bg-opacity-90 hover:bg-opacity-100 hover:shadow-2xl rounded-lg overflow-hidden transition duration-200 ease-linear">
            <div class="overflow-hidden h-56">
                <img :src="require(`@/assets/${tag}.jpg`)">
            </div>
            <div class="p-4">
                <span class="inline-block px-3 py-2 leading-none bg-orange-200 text-orange-900 rounded-full font-semibold uppercase tracking-wide text-xs">{{ tag }}</span>
                <h3 class="mt-2 mb-2 text-2xl font-bold text-black text-opacity-80 max-h-9">{{ title }}</h3>
                <p class="text-sm">{{ description }}</p>
                <div class="mt-3 flex items-center">
                    <button class="inline-block bg-secondary hover:bg-opacity-90 py-2 px-4 text-white w-full font-semibold rounded-lg shadow-lg" type="button" data-modal-toggle="authentication-modal">
                            Join
                    </button>
                </div>
            </div>
            <div class="p-4 flex items-center text-sm text-gray-600">
                <span class="ml-2">{{ date }}</span>
            </div>
        </a>
    </div>
</template>

<script>
  export default {
    name: 'Event',
    props: {
      title: { required: true, type: String },
      img: {required: false},//maybe set default img
      description: {required: true, type: String},
      date: {required: true, type: String},
      link: {required: true},
      imageUrl: {required: false},
      tag: {required:true}
    },
    methods: {
    }
  }
</script>
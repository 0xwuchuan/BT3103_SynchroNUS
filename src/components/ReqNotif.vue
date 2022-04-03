<template>

    <div
    class="p-2 rounded text-700 bg-50 border-900/10 w-100">
    <a :href="link" class="text-black hover:text-slate-600">
    <b>{{ user }}</b> requested to join your event: {{ eventname }}
    </a>
    </div><hr>

</template>

<script>
export default {
    name: 'ReqNotif',
    props: {
        user: {required: true, type: String},
        link: {required: true},
        eventname: {required: true, type: String},
    }
}   
</script>

<style scoped>
a:hover {
    color: rgb(7 89 133);
}
</style>
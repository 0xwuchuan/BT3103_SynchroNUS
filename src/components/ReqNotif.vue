<template>

    <div
    class="p-2 rounded text-700 bg-50 border-900/10 w-100">
    <b>{{ user }}</b> requested to join your event: {{ eventname }}
    </div><hr>

</template>

<script>


export default {
    name: 'ReqNotif',
    props: {
        user: {required: true, type: String},
        eventname: {required: true, type: String}
    }
}   
</script>
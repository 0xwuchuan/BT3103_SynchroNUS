<template>

    <div
    class="p-2 rounded text-700 bg-50 border-900/10 w-100">
    {{ user }} requested to join your event
    </div><hr>

</template>

<script>


export default {
    name: 'ReqNotif',
    props: {
        user: {required: true, type: String},
        // eventname: {required: true, type: String}
    }
}   
</script>
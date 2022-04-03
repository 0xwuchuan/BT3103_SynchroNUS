<template>

    <div
    class="p-2 rounded text-700 bg-50 border-900/10 w-100">
    <a :href="link" class="text-black">
    
    <b>{{ user }}</b> commented on your event: {{ text }} 
    </a>
    </div><hr>

</template>

<script>
export default {
    name: 'CommNotif',
    props: {
        user: {required: true, type: String},
        text: {required: true, type: String},
        link: {required: true}
    }

}   
</script>

<style scoped>
.text {
    /* display: flex; */
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    max-width: 15cm;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    
    margin-bottom: 10px;
    color: #333;
    background-color: #F2F2F2;
    border-radius: 30px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

a {
    text-decoration: none;
}
a:hover {
    color: rgb(7 89 133);
}

</style>
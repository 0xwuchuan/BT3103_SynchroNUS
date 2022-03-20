<template>

    <!-- if commented -->
    <div class="text">
        <h5>User commented on your event</h5>
    </div>

    <!-- if requested -->
    <div class="text">
        <h5>User requested to join your event</h5>
    </div>

    <!-- if request accepted -->
    <div class="text">
        <h5>Your request to join Event was accepted</h5>
    </div>
  
</template>

<script>
    export default {
        name: 'singleNotif',
        //props: ['notif']
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

</style>
<template>
    <div class="">
        <div class="training">
            {{ type }}<br/><br/>
            {{ time }}</div>
      </div>
</template>

<script>
export default {
    props: {
       type: String,
       time: String
    }
}
</script>

<style scoped>
.training {
    height: 75px;
    border: 1px solid rgba(0, 0, 0, 0.24);
}
</style>
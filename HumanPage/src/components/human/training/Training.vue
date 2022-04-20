<template>
    <div>
        <div class="training">
            {{ type }}<br/>
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
    border: 1px solid rgba(0, 0, 0, 0.158);
    padding-top: 12px;
}
@media screen and (max-width: 600px) {
    .training {
        padding-top: 4px;
    }
}
</style>
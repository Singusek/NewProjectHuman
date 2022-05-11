<template>
    <div class="film">
        <!-- <div>
        {{ item.player.embedHtml
        .split(' ')[3]
        .split('="')[1]
        .slice(0, -1) }}</div> -->
        <iframe class="video"  :src="myTrim2(embedHtml)"/>
        <!-- <div>{{ myTrim() }}</div> -->
        <!-- <div>{{ myTrim2(embedHtml) }}</div> -->
        <!-- <div>{{ item.player }}</div>
        <div>{{ data }}</div>
        <div>{{ item }}</div> -->
    </div>
</template>

<script>
export default {
    methods: {
        myTrim() {
            return this.embedHtml.split(' ')[3].split('="')[1].slice(0, -1)
            
        },
        myTrim2(string) {
            return string.split(' ')[3].split('="')[1].slice(0, -1)
            
        }
    }, 
    props: {
        embedHtml: String,
    },
}
</script>

<style scoped>
.video {
  height: 250px; 
  overflow-x: scroll;
  border: 1px solid black;
  border-radius: 5px;
  transition: all 1s linear;
  margin: 20px 0px;
}
.film {
   
}
</style>
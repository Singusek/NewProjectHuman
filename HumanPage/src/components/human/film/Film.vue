<template>
<div class="all">
    <div class="film video-container">
        <iframe 
        class="video animate__animated animate__zoomIn" 
        :src="myTrim2(embedHtml)" 
        frameborder="0" allowfullscreen/>
    </div>
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
  max-width: 80vw;
  overflow-x: scroll;
  border: 1px solid black;
  border-radius: 5px;
  transition: all 2s linear;
  
}
.film {
   min-width: 200px;
   min-height: 150px;
   
}
.all {
    margin: 25px;
}

</style>
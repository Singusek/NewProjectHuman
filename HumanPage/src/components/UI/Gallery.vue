<template>
    <div class="container">
        <h4>Galeria</h4>
        <div class="row">
            <div class="col 14 m4 s12">
                <img src="src/img/1-1.jpg" class="materialboxed card responsive-img"/>
            </div>
            <div class="col 14 m4 s12">
                <img src="src/img/2-1.jpg" class="card responsive-img materialboxed"/>
            </div>
            <div class="col 14 m4 s12">
                <img src="src/img/3-1.jpg" class="card responsive-img materialboxed"/>
            </div>
            <div class="col 14 m4 s12">
                <img src="src/img/4.jpg" class="card responsive-img materialboxed"/>
            </div>
            <div class="col 14 m4 s12">
                <img src="src/img/5.jpg" class="card responsive-img materialboxed"/>
            </div>
            <div class="col 14 m4 s12">
                <img src="src/img/6.jpg" class="card responsive-img materialboxed"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });
    },
}
</script>

<style scoped>
.materialboxed {
  width:100%;
}
.container {
    background-color: white;
}
h4 {
    margin-left: auto;
    margin-right: auto;
    text-align:center;
}
</style>
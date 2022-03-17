<template>
    <div>
        <the-header></the-header>
        <div>
            <input type="text" class="datepicker">
        </div>
        <the-footer></the-footer>
    </div>
</template>


<script>

    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });

</script>

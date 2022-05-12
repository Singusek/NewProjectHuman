<template>
<div>
    <div v-if="totalPages() > 0" class="pagination-wrapper">
    <span v-if="showPreviousLink()" class="pagination-btn" v-on:click="updatePage(currentPage - 1)"> Prev </span>
    {{ currentPage + 1 }} of {{ totalPages() }}
    <span v-if="showNextLink()" class="pagination-btn" v-on:click="updatePage(currentPage + 1)"> Next </span>
  </div>
</div>
    <!-- <div>
        <div class="pagination-row">
        <button class="pagination-button">Prev</button>
        <span v-for="(item, index) in new Array(10)" :key="index">
        <button class="pagination-button">{{ index + 1 }}</button>  
        </span>
        <button class="pagination-button">Next</button>
        </div>
        <slot />
    </div> -->
</template>

<script>
export default {
  name: 'pagination',
  props: ['data', 'currentPage', 'pageSize'],
  methods: {
    updatePage(pageNumber) {
      this.$emit('page:update', pageNumber);
    },
    totalPages() {
      return Math.ceil(this.data.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == (this.totalPages() - 1) ? false : true;
    }
  }
}
</script>

<style scoped>
.pagination-btn {
  cursor: pointer;
}
/* .pagination-button {
    padding: 8px;
    margin: 2px;
    border-radius: 3px;
    font-size: 1em;
    cursor: pointer;
}
.pagination-row {
    padding: 5px;
} */
</style>
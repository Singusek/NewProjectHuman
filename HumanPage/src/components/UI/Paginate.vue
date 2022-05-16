<template>
<div>
    <div v-if="totalPages() > 0" class="pagination">
    <button v-if="showPreviousLink()" class="pagination-button" v-on:click="updatePage(currenPage - 1)">Prev</button>
    {{ currenPage + 1 }} of {{ totalPages() }}
    <button v-if="showNextLink()" class="pagination-button" v-on:click="updatePage(currenPage + 1)">Next</button>
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
  name: 'paginate',
  props: ['data', 'currenPage', 'pageSize'],
  methods: {
    updatePage(pageNumber) {
      this.$emit('page:update', pageNumber);
    },
    totalPages() {
      return Math.ceil(this.data.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currenPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currenPage == (this.totalPages() - 1) ? false : true;
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
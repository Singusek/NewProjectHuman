<template>
<div>
  <!-- <page-loader v-if="isLoading"/> -->
    <div v-if="totalPages() > 0" class="pagination">
    <button v-if="showPreviousLink()" class="pagination-button" v-on:click="updatePage(currenPage - 1)"> Prev </button>
    {{ currenPage + 1 }} of {{ totalPages() }}
    <button v-if="showNextLink()" class="pagination-button" v-on:click="updatePage(currenPage + 1)"> Next </button>
  </div>
</div>
</template>

<script>
import PageLoader from '../../components/UI/PageLoader.vue'
export default {
  data() {
    return {
      isLoading: true
    }
  },
  // emits: {
  //   loding: '<page-loader v-if="isLoading"/>'
  // },
  components: {
    PageLoader
  },
  name: 'paginate',
  props: ['video', 'currenPage', 'pageSize'],
  methods: {
    updatePage(pageNumber) {
      this.$isLoading(true)
      setTimeout(() => {
      this.$isLoading(false)}, 1400);
      this.$emit('page:update', pageNumber); // ta funkcje polaczyc z lodingiem
      
      // this.$isLoading(true)
      // this.$emit('loading'); // nie mozna zrobic eventu metaoda emit
      // this.$emit('page:update', pageNumber, this.isLoading = false); 

      // setTimeout(() => {
      // this.$isLoading = false;
      //  }, 1000);
      
    },
    totalPages() {
      return Math.ceil(this.video.length / this.pageSize); 
    },
    showPreviousLink() {
      return this.currenPage == 0 ? false : true;
      // setTimeout(() => {
      // this.isLoading = false;
      //  }, 1500);
    },
    showNextLink() {
      return this.currenPage == (this.totalPages() - 1) ? false : true;
    }
  },
  mounted() {
  
    setTimeout(() => {
      this.isLoading = false;
       }, 1500);
  },
}
</script>

<style scoped>
.pagination-btn {
  cursor: pointer;
}
.pagination-button {
    padding: 8px;
    margin: 2px;
    border-radius: 3px;
    font-size: 1em;
    cursor: pointer;
}
.pagination {
    padding: 0px;
}
</style>
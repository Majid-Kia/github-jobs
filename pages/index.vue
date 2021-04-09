<template>
  <div class="">
    <Header />
    <div class="main-body">
    <Search/>

    </div>
    <Jobs />
    <Observer @intersect="intersect" />
  </div>
</template>

<script>
import Header from "@/components/landing/Header";
import Jobs from "@/components/landing/Jobs";
import Observer from "@/components/observer/Observer";
import Search from "@/components/landing/Search";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Header,
    Jobs,
    Observer,
    Search
  },
  computed: {
    ...mapGetters({
      loadedItems: "getLoadedItems",
      jobs: "getJobs",
      itemsAddPerLoad: "getItemsAddPerLoad",
      endResult: "getEndResult"
    })
  },
  methods: {
    ...mapActions(["loadMore", "callSetLoadedItems", "changePage"]),
    intersect() {
      if (!this.endResult) {
        if (this.jobs.length - this.loadedItems.length < this.itemsAddPerLoad) {
          this.changePage();
          this.loadMore();
        }
        if (this.loadedItems.length < this.jobs.length) {
          this.callSetLoadedItems();
        }
      }
    }
  }
};
</script>

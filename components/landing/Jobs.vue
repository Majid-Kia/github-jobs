<template>
  <div class="main-body">
    <div class="jobs-list" v-if="!filteredJobs.length">
      <Job v-for="job in jobs" :key="job.id" :job="job" />
    </div>
    <div class="jobs-list" v-else>
      <Job v-for="job in filteredJobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<script>
import Job from "@/components/landing/Job";
import { mapGetters } from "vuex";
export default {
  name: "Jobs",
  components: {
    Job
  },
  computed: {
    ...mapGetters({jobs:'getLoadedItems' , filteredJobs:'getFilteredResults'})
  }
};
</script>

<style lang="scss" scoped>
.jobs-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  @media (min-width: 800px) and (max-width: 1439px) {
    margin-top: 50px;
  }
  @media (max-width: 800px) {
    margin-top: 40px;
  }
}
</style>

<template>
    <JobDetail :job="job" />
</template>

<script>
import JobDetail from '@/components/jobDetail/JobDetail'
export default {
  components:{
    JobDetail,
  },
  async asyncData({ params, $axios }) {
    const job = await $axios.$get(`https://jobs.github.com/positions/${params.id}.json`);
    return { job };
  }
};
</script>

<style></style>

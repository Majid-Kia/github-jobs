<template>
  <section>
    <Header />
    <div class="job-detail">
      <Company :job="job" />
      <Description :job="job" />
      <HowToApply :howToApply="job.how_to_apply" />
    </div>
    <ApplyBar :job="job" />
  </section>
</template>

<script>
import Header from "@/components/landing/Header";
import Company from "@/components/jobDetail/Company";
import Description from "@/components/jobDetail/Description";
import HowToApply from "@/components/jobDetail/HowToApply";
import ApplyBar from "@/components/jobDetail/ApplyBar";

export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  components: {
    Header,
    Company,
    Description,
    HowToApply,
    ApplyBar
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.job-detail {
  width: 800px;
  margin: 0 auto;
  //background-color: var(--grayLightBg);
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 12px;
  }
}
</style>

<template>
  <div class="apply-bar">
    <div class="apply-bar__content">
      <div class="apply-bar__text">
        <h3>{{ job.title }}</h3>
        <span>{{ extractUrl(job.company_url) }}</span>
      </div>
      <a :href="job.url" target="blank">Apply Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplyBar",
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  methods: {
    extractUrl(url) {
      return `${url.split(".")[1]}.${url.split(".")[2]}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.apply-bar {
  text-align: center;
  background-color: var(--whiteBg);
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
.apply-bar__content {
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    justify-content: center;
  }
  a {
    display: flex;
    color: var(--white);
    background-color: var(--violet);
    padding: 10px 18px;
    border-radius: 2px;
    font-size: 10px;
    @media (max-width: 800px) {
      width: 80%;
      justify-content: center;
          border-radius: 4px;

    }
  }
}
.apply-bar__text {
  @media (max-width: 800px) {
    display: none;
  }
  h3 {
    color: var(--blackText);
    font-size: 12px;
  }
  span {
    color: var(--gray);
    font-size: 10px;
    display: block;
    margin-top: 8px;
  }
}
</style>

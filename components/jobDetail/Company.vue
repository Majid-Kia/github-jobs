<template>
  <div class="company">
    <div class="company__detail">
      <div
        class="company__logo"
        v-if="job.company_logo"
        :style="{ backgroundImage: 'url(' + job.company_logo + ')' }"
      ></div>
      <div class="company__name">
        <h1>{{ job.title }}</h1>
        <span>{{ extractUrl(job.company_url) }}</span>
      </div>
    </div>
    <a class="company__link" :href="job.url" target="blank">
      Company Site
    </a>
  </div>
</template>

<script>
export default {
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
.company {
  display: flex;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--whiteBg);
  margin-top: -50px;
  @media (max-width: 800px) {
    flex-direction: column;
    padding-bottom: 10px;
  }
}
.company__detail {
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
}
.company__logo {
  width: 140px;
  height: 140px;
  border-radius: 4px 0 0 4px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  @media (max-width: 800px) {
    width: 70px;
    height: 70px;
    margin-top: -35px;
    background-color: var(--white);
    border-radius: 4px;
  }
}
.company__name {
  margin-left: 24px;
  @media (max-width: 800px) {
    text-align: center;
    margin-left: 0;
    margin-top: 12px;
  }
  h1 {
    color: var(--blackText);
    font-size: 16px;
  }
  span {
    color: var(--gray);
    font-size: 12px;
    display: block;
    margin-top: 8px;
  }
}
.company__link {
  margin-right: 30px;
  display: flex;
  padding: 8px 12px;
   background-color:  rgba(149, 157, 244,.2);
  color: var(--violet);
  font-size: 10px;
  border-radius: 4px;
  @media (max-width: 800px) {
    margin-right: 0;
    padding: 14px 18px;
    margin-top: 14px;
   
  }
}
</style>

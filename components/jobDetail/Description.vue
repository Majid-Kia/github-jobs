<template>
  <section class="description">
    <div class="description__header">
      <div class="description__header-detail">
        <div class="job__upload-time">
          <span>
            {{ calculateDiffTime(job.created_at) }}
          </span>

          <span>
            {{ job.type }}
          </span>
        </div>
        <h3 class="job__title">
          {{ job.title }}
        </h3>

        <span class="job__location">
          {{ job.location }}
        </span>
      </div>
      <a class="apply" :href="job.url" target="blank">
        Apply Now
      </a>
    </div>
    <div class="description__body" v-html="job.description"></div>
  </section>
</template>

<script>
import moment from "moment";

export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },

  methods: {
    calculateDiffTime(createTime) {
      let now = moment();
      if (now.diff(createTime, "years") > 0) {
        return `${now.diff(createTime, "years")} year ago`;
      } else if (now.diff(createTime, "months") > 0) {
        return `${now.diff(createTime, "months")} month ago`;
      } else if (now.diff(createTime, "weeks") > 0) {
        return `${now.diff(createTime, "weeks")} week ago`;
      } else if (now.diff(createTime, "days") > 0) {
        return `${now.diff(createTime, "days")} day ago`;
      } else if (now.diff(createTime, "hours") > 0) {
        return `${now.diff(createTime, "hours")} hour ago`;
      } else if (now.diff(createTime, "minutes") > 0) {
        return `${now.diff(createTime, "minutes")} minute ago`;
      }
      return "";
    }
  }
};
</script>

<style lang="scss" scoped>
.description {
  margin-top: 30px;
  background-color: var(--whiteBg);
  padding: 24px;
  width: 100%;
  border-radius: 4px;
}
.job__upload-time {
  color: var(--gray);
  font-size: 11px;
  span {
    &:nth-child(2) {
      position: relative;
      padding-left: 12px;
      &:before {
        content: ".";
        display: block;
        position: absolute;
        left: 3px;
        top: 5px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: var(--gray);
      }
    }
  }
}
.job__title {
  color: var(--blackText);
  font-weight: 700;
  font-size: 16px;
  margin-top: 5px;
}

.job__location {
  color: var(--violet);
  margin-top: 18px;
  font-size: 10px;
  font-weight: 700;
}
.description__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
}
.apply {
  display: flex;
  background-color: var(--violet);
  color: var(--white);
  font-size: 10px;
  padding: 10px 14px;
  border-radius: 4px;
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 20px;
    justify-content: center;
  }
}
.description__body {
  margin-top: 40px;
}
</style>

<style lang="scss">
.description__body {
  margin-top: 40px;
  p {
    color: var(--gray);
    line-height: 1.6;
    font-size: 14px;
  }
  strong {
    margin-top: 24px;
    color: var(--blackText);
    font-size: 16px;
    font-weight: 700;
    display: block;
    margin-bottom: 20px;
  }
  ul {
    margin: 24px 0;
    li {
      margin-bottom: 12px;
      color: var(--gray);
      position: relative;
      padding-left: 24px;
      font-size: 14px;
      &:last-child {
        margin-bottom: 0;
      }
      &:before {
        content: ".";
        position: absolute;
        left: 0;
        color: var(--violet);
        font-size: 42px;
        line-height: 0;
        top: -2px;
      }
    }
  }
}
</style>

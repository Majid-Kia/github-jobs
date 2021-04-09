<template>
 
    <div class="job">
      <NuxtLink :to="job.id">
      <div class="job__card">
        <div
          class="job__logo"
          v-if="job.company_logo"
          :style="{ backgroundImage: 'url(' + job.company_logo + ')' }"
        ></div>
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
        <span class="job__subtitle">
          {{ job.company }}
        </span>
        <span class="job__location">
          {{ job.location }}
        </span>
      </div>
       </NuxtLink>
    </div>
 
</template>

<script>
import moment from "moment";
export default {
  name: "job",
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
.job {
  width: calc(33.333% - 12px);
  background-color: var(--whiteBg);
  border-radius: 2px;
  padding: 24px 20px;
  padding-top: 34px;
  margin-right: 18px;
  margin-bottom: 40px;
  position: relative;
  &:nth-child(3n) {
    margin-right: 0;
  }
  @media (min-width: 800px) and (max-width: 1439px) {
    width: calc(50% - 12px);
    &:nth-child(3n) {
      margin-right: 18px;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    margin-right: 0;

    &:nth-child(3n) {
      margin-right: 0px;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}
.job__logo {
  border-radius: 9px;
  position: absolute;
  top: -15px;
  left: 20px;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: var(--whiteBg);
  //box-shadow: 0 1px 2px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.12);
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
  margin-top: 10px;
}
.job__subtitle {
  color: var(--gray);
  margin-top: 8px;
  font-size: 12px;
}
.job__location {
  color: var(--violet);
  margin-top: 18px;
  font-size: 10px;
  font-weight: 700;
}
.job__card {
  display: flex;
  flex-direction: column;
}
</style>

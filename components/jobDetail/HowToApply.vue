<template>
  <div class="how-apply" >
   <h3 class=""> How to Apply</h3>

    <div class="how-apply__text" v-html="howToApply">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "HowToApply",
  props: {
    howToApply: {
      type: String,
      required: true
    }
  },

};
</script>

<style lang="scss" scoped>
.how-apply {
  background: url("~assets/images/footer.svg");
  margin-top: 20px;
  padding: 36px;
  color: var(--white);
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
    margin-bottom: 80px;
}
h3{
  font-size: 14px;
  margin-bottom: 16px;
}


</style>

<style lang="scss">

.how-apply__text{
  p{
    display: block;
    width: 100%;
    font-size: 12px;
    font-weight: 400;
  }
  a{
    font-size: 12px;
    text-decoration: underline;
    
  }
}
</style>



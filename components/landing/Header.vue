<template>
  <header class="header">
    <div class="main-body">
      <div class="header__title">
        <h1>devjobs</h1>

        <div class="header__theme-switch">
          <i class="icon-sun"></i>
          <label class="switch">
            <input type="checkbox" @click="toggleCheckbox" />
            <div class="slider round"></div>
          </label>
          <i class="icon-moon"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      lightTheme: true
    };
  },
  methods: {
    toggleCheckbox() {
      this.lightTheme = !this.lightTheme;
      //this.$emit("setCheckboxVal", this.lightTheme);
      if(!this.lightTheme){
        document.documentElement.style.setProperty('--grayLightBg' , 'var(--midnight)');
        document.documentElement.style.setProperty('--whiteBg' , 'var(--Blue)');
        document.documentElement.style.setProperty('--blackText' , 'var(--white)');
      }else{
        document.documentElement.style.setProperty('--grayLightBg' , 'var(--grayLight)');
        document.documentElement.style.setProperty('--whiteBg' , 'var(--white)');
        document.documentElement.style.setProperty('--blackText' , 'var(--midnight)');

      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: url("~assets/images/header.svg");
  height: 160px;
  background-size: 100% 160px;
  background-repeat: no-repeat;
  padding-top: 50px;
  @media (min-width: 800px) and (max-width: 1439px) {
    background-size: 100% 140px;
    padding-top: 30px;
  }
  @media (max-width: 800px) {
    background-image: url("~assets/images/header-mobile.svg");
    background-size: 100% 136px;

    padding-top: 28px;
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 0 10px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--white);
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 4px;
  bottom: 3px;
  background-color: var(--violet);
  transition: 0.4s;
}

// input:checked + .slider {
//   background-color: #101010;
// }

// input:focus + .slider {
//   box-shadow: 0 0 1px #101010;
// }

input:checked + .slider:before {
  transform: translateX(19px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.header__title {
  color: var(--whiteText);
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 24px;
  }
}
.header__theme-switch {
  display: flex;
  align-items: center;
}
</style>



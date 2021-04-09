<template>
  <ul class="search-suggestion">
    <li
      v-for="title in items"
      :key="title"
      @click="$emit('select-suggestion', { selected: title, subject })"
    >
      {{ title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['subject', 'items']
};
</script>

<style scoped>
.search-suggestion {
  width: 100%;
  position: absolute;
  box-shadow: 0 2px 1px 1px rgba(51, 51, 51, 0.15);
  max-height: 200px;
  overflow: auto;
  z-index: 10;
  background-color: var(--whiteBg);
}
li {
  padding: 10px ;
  border-bottom: 1px solid rgba(204, 204, 204, 0.4);
  cursor: pointer;
  color: var(--blackText);
    font-size:12px ;

}
li:hover {
  background: var(--grayLightBg);
}
</style>

<template>
  <header class="site-header">
    <navbar />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "./Navbar.vue";

@Component({
  components: {
    Navbar,
  },
})
export default class TheHeader extends Vue {}
</script>

<style scoped lang="scss">
/*----- Site header -----*/
.site-header {
  width: calc(100% - 3rem);
  padding-top: 0.75rem;
  z-index: 1;
  position: fixed;
  background-color: #18191a;
}

@media (max-width: 575.98px) {
  .site-header {
    position: relative;
    width: 100%;
  }
}
</style>

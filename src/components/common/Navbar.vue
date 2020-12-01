<template>
  <div class="nav-bar bg-dark-ui border-ui">
    <div class="container-fluid">
      <div class="nav-bar-content px-fix">
        <div class="navbar-brand">
          <a class="color-gradient" href="index.html">FACE SERVICES</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
@import "../../assets/css/navbar.scss";
</style>

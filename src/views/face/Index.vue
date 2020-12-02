<template>
  <div class="container">
    <!-- Left Side -->
    <left-side>
      <sidebar />
    </left-side>

    <!-- Right Side -->
    <right-side>
      <!-- Views -->
      <router-view />
    </right-side>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LeftSide from "@/components/layout/LeftSide.vue";
import RightSide from "@/components/layout/RightSide.vue";
import Sidebar from "./Sidebar.vue";
import Match from "./Match.vue";

@Component({
  components: {
    LeftSide,
    RightSide,
    Sidebar,
    Match,
  },
})
export default class Index extends Vue {}
</script>

<style scoped lang="scss">
.container {
  padding-top: 8rem;
}

@media (max-width: 575.98px) {
  .container {
    padding-top: 0;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}

@import "../../assets/css/label-info-panel.scss";
</style>

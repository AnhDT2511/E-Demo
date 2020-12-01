<template>
  <div id="app">
    <!-- The Header -->
    <the-header />

    <!-- Views -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "./components/common/TheHeader.vue";
// import $ from "jquery";

@Component({
  components: {
    TheHeader,
  },
})
export default class App extends Vue {
  mounted() {
    //document.body.classList.add("bg-dark");
  }
}
</script>

<style lang="scss">
@import "./assets/css/common.scss";
@import "./assets/css/color.scss";
@import "./assets/css/grip.scss";
</style>

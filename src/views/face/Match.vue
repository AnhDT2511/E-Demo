<template>
  <div>
    <h1>Match</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Info extends Vue {
  private isPartner = true;
}
</script>

<style scoped lang="scss">
.right .tab-content .about .about-info {
  padding: 1rem 1rem 0.25rem 1rem;
}
</style>

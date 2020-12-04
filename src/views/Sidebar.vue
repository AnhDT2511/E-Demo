<template>
  <div>
    <div class="sidebar-menu bg-dark-ui border-ui mb-3">
      <ul>
        <li>
          <router-link :to="{ name: 'OCR' }">
            <font-awesome-icon
              class="text-pink mr-2"
              :icon="['far', 'address-card']"
              fixed-width
            />Trích xuất thông tin giấy tờ
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar-menu bg-dark-ui border-ui mb-3">
      <ul>
        <li>
          <router-link :to="{ name: 'Match11' }">
            <font-awesome-icon
              class="text-violet mr-2"
              :icon="['fas', 'user-friends']"
              fixed-width
            />So khớp khuôn mặt
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Match1n' }">
            <font-awesome-icon
              class="text-sea-green mr-2"
              :icon="['fas', 'users']"
              fixed-width
            />So khớp nhiều khuôn mặt
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar-menu bg-dark-ui border-ui mb-3">
      <ul>
        <li>
          <router-link :to="{ name: 'Gender' }">
            <font-awesome-icon
              class="text-info mr-2"
              :icon="['fas', 'venus-mars']"
              fixed-width
            />Xác định giới tính
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar-menu bg-dark-ui border-ui mb-3">
      <ul>
        <li>
          <router-link :to="{ name: 'IdentificationCelebrity' }">
            <font-awesome-icon
              class="text-warning mr-2"
              :icon="['fas', 'user-check']"
              fixed-width
            />Nhận dạng người nổi tiếng
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {}
</script>

<style scoped lang="scss">
@import "../assets/css/sidebar.scss";
</style>

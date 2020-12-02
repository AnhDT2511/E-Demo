<template>
  <div>
    <div class="sidebar-menu bg-dark-ui border-ui mb-3">
      <ul>
        <li>
          <router-link :to="{ name: 'Match' }">
            <font-awesome-icon
              class="text-pink mr-2"
              :icon="['far', 'address-card']"
              fixed-width
            />So khớp giấy tờ
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Match11' }">
            <font-awesome-icon
              class="text-violet mr-2"
              :icon="['fas', 'people-arrows']"
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
    <!-- <div class="sidebar-menu bg-dark-ui border-ui mb-3">
      <ul>
        <li>
          <router-link :to="{ name: 'ProfilePayIn' }">
            <font-awesome-icon
              class="text-violet mr-2"
              :icon="['fas', 'plus']"
              fixed-width
            />Nạp tiền
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ProfileWithdraw' }">
            <font-awesome-icon
              class="text-sea-green mr-2"
              :icon="['fas', 'reply']"
              fixed-width
            />Rút tiền
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ProfileWithdraw' }">
            <font-awesome-icon
              class="text-info mr-2"
              :icon="['fas', 'history']"
              fixed-width
            />Lịch sử giao dịch
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar-menu bg-dark-ui border-ui mb-3">
      <ul>
        <li>
          <a href="profile-manager.html">
            <font-awesome-icon
              class="text-primary mr-2"
              :icon="['fas', 'chart-line']"
              fixed-width
            />Quản lý tài khoản
          </a>
        </li>
        <li>
          <a href="profile-setting.html">
            <font-awesome-icon
              class="text-warning mr-2"
              :icon="['fas', 'cog']"
              fixed-width
            />Cài đặt tài khoản
          </a>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {}
</script>

<style scoped lang="scss">
@import "../../assets/css/sidebar.scss";
</style>

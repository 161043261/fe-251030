<script setup lang="ts">
import { ref } from "vue";
import Login from "./components/login.vue";
import Register from "./components/register.vue";
import { t } from "i18next";

const isLogin = ref(true);
</script>

<template>
  <view class="auth">
    <view v-if="isLogin">
      <Login class="auth__login" />
    </view>
    <view v-else>
      <Register class="auth__register" />
    </view>

    <view class="auth__footer">
      <view v-if="!isLogin" class="auth__footer-item" @click="isLogin = true">
        {{ t("already have an username? go to login") }}
      </view>
      <view v-else class="auth__footer-item" @click="isLogin = false">
        {{ t("don't have an username? go to register") }}
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.auth {
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
}
</style>

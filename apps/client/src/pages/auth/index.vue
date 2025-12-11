<script setup lang="ts">
import { ref } from 'vue';
import Login from './components/login.vue';
import Register from './components/register.vue';

// 当前是登录还是注册
const isLogin = ref(true);
</script>

<template>
  <!-- view 类似 div -->
  <view class="auth">
    <view v-if="isLogin">
      <Login class="auth__login" />
    </view>
    <view v-else>
      <Register class="auth__register" />
    </view>

    <view class="auth__footer">
      <view class="auth__footer-item" @click="isLogin = true">已有账号, 登录</view>
      <view class="auth__footer-item" @click="isLogin = false">注册</view>
    </view>
  </view>
</template>

<style scoped lang="css"></style>

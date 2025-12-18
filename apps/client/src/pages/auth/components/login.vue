<script setup lang="ts">
import { reactive } from "vue";
import { t } from "i18next";
import { loginApi } from "@/apis/auth";
import { type ILoginData } from "@/types/auth";

const formData = reactive<ILoginData>({
  username: "",
  password: "",
});

const handleLogin = async () => {
  try {
    const { data } = await loginApi(formData);
    uni.setStorageSync("token", data.token);
    uni.reLaunch({
      url: "/pages/index/index",
    });
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <view class="login">
    <view class="login-container">
      <uni-form>
        <uni-forms-item :label="t('username')" name="username" prop="username" required>
          <uni-easyinput v-model="formData.username" type="text" :placeholder="t('please enter your username')" />
        </uni-forms-item>
        <uni-forms-item required :label="t('password')" name="password" prop="password">
          <uni-easyinput v-model="formData.password" type="password" :placeholder="t('please enter your password')" />
        </uni-forms-item>

        <view class="uni-button-group">
          <button type="button" @click="handleLogin" class="login-button">
            {{ t("login") }}
          </button>
        </view>
      </uni-form>
    </view>
  </view>
</template>

<style scoped lang="scss">
.login {
  &- {
    &container {
      padding: 1rem;
    }

    &button {
      background: #007aff;
    }
  }
}
</style>

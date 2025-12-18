<script setup lang="ts">
import { reactive } from "vue";
import { t } from "i18next";
import { type IRegisterData } from "@/types/auth";
import { registerApi } from "@/apis/auth";

const formData = reactive<IRegisterData>({
  username: "",
  password: "",
});

const handleRegister = async () => {
  try {
    const { data } = await registerApi(formData);
    if (import.meta.env.DEV) {
      console.log(data);
    }
    uni.switchTab({
      url: "/pages/auth/index",
    });
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <view class="register">
    <view class="register-container">
      <uni-form>
        <uni-forms-item :label="t('username')" name="username" prop="username" required>
          <uni-easyinput v-model="formData.username" type="text" :placeholder="t('please enter your username')" />
        </uni-forms-item>
        <uni-forms-item required :label="t('password')" name="password" prop="password">
          <uni-easyinput v-model="formData.password" type="password" :placeholder="t('please enter your password')" />
        </uni-forms-item>

        <view class="uni-button-group">
          <button type="button" @click="handleRegister" class="register-button">
            {{ t("register") }}
          </button>
        </view>
      </uni-form>
    </view>
  </view>
</template>

<style scoped lang="scss">
.register {
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

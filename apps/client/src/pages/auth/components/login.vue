<script setup lang="ts">
import { reactive } from 'vue';
import { useTranslation } from 'i18next-vue';

const { i18next, t } = useTranslation();
const formData = reactive({
  username: '',
  password: '',
})
</script>

<template>
  <view>
    <h1>{{ i18next.language }}</h1>
    <uni-form>
      <uni-forms-item :label="t('账号')" name="username" prop="username" required>
        <uni-easyinput v-model="formData.username" type="text" :placeholder="t('请输入账号')" />
      </uni-forms-item>
      <uni-forms-item required :label="$t('密码')" name="password" prop="password">
        <uni-easyinput v-model="formData.password" type="password" :placeholder="$t('请输入密码')" />
      </uni-forms-item>
    </uni-form>
  </view>
</template>

<style scoped lang="css"></style>

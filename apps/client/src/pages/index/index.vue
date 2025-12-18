<script setup lang="ts">
import { t } from "i18next";
import logo from "@/static/logo.png";
</script>

<template>
  <view class="homepage">
    <view class="homepage__list-item">
      <view class="homepage__list-item-title">{{ t('title') }}</view>
      <view class="homepage__list-item-content">
        <image :src="logo" mode="widthFix" />
        <view class="homepage__list-item-content-text">
          lark_lark_lark_lark_lark_lark
          lark_lark_lark_lark_lark_lark
        </view>
      </view>
    </view>

    <view class="homepage__list-item">
      <view class="homepage__list-item-title">{{ t('title') }}</view>
      <view class="homepage__list-item-content">
        <image :src="logo" mode="widthFix" />
        <view class="homepage__list-item-content-text">
          lark_lark_lark_lark_lark_lark
          lark_lark_lark_lark_lark_lark
          lark_lark_lark_lark_lark_lark
          lark_lark_lark_lark_lark_lark
          lark_lark_lark_lark_lark_lark
          lark_lark_lark_lark_lark_lark
          lark_lark_lark_lark_lark_lark
          lark_lark_lark_lark_lark_lark
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.homepage {
  padding: 1rem;

  &__list {
    &-item {
      background: $uni-bg-color;
      border-radius: 1rem;
      padding: 1rem;
      margin-bottom: 1rem;

      &- {
        &title {
          font-size: 1.5rem;
          color: $uni-text-color;
          margin-bottom: 0.5rem;
        }

        &content {
          display: flex;
          justify-content: space-between;
          gap: 1rem;

          image {
            width: 5rem;
            height: 5rem;
          }

          &-text {
            font-size: 1rem;
            line-height: 1.5rem;
            color: $uni-text-color;
            height: 7.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 15rem;
          }
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import { useTitle } from '@/hooks/useTitle';
import { forward } from '@/utils/router';
import Profile from '../profile/profile.vue';
    const $test = inject('$test')

const { title, changeTitle } = useTitle();
const a=ref(1)
function goTest() {
  forward('test', {
    a: 1
  });
}
function goTest2() {
  forward('index2', {
    a: 1
  });
}
function goTest3() {
  forward('mine', {
    a: 1
  });
}
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view @click="changeTitle">changeTitle</view>
    <view @click="goTest">测试页</view>
    <view @click="goTest2">index测试页</view>
    <view @click="goTest3">mine测试页</view>

    <profile/>
  </view>
</template>

<style scoped lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo {
    margin-left: auto;
    margin-right: auto;
    margin-top: 200rpx;
    margin-bottom: 50rpx;
    width: 200rpx;
    height: 200rpx;
  }
  .text-area {
    display: flex;
    justify-content: center;
  }
  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>

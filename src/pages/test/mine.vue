<template>
    <div>
        <uni-card title="ss"> </uni-card>
        <u-button type="primary" :color="'#bfa'">提交</u-button>
        <UniCard />
    </div>
</template>

<script setup>
    // 配置了自动导入
    const testStore = useStore('user')
    const a = testStore.userInfo
    const setupStore = useStore('setup')
    const { name } = setupStore
    console.log('testStore', a.value)
    onShow(() => {
        console.log('aa', a.value)
        console.log('setupStore==name', name.value)
    })
</script>

<style lang="scss" scoped></style>

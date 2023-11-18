<template>
    <div>
        <div class="grid place-items-center place-content-center h-screen">
            <div class="mt-20"> 测试pinia store命名空间使用</div>
            <div class="mt-20">userstore==userinfo:{{ userStore.userInfo }}</div>
            <div class="mt-20">teststore==name:{{ testStore.name }}</div>
        </div>
        <div class="mt-20">
            <h1 class="fs-40">uview使用</h1>
            <uni-card title="ss" @click="confirm"> </uni-card>
            <div class="flex-content-center flex justify-center">
                <uni-icons type="wallet" color="#bfa" size="24" />
            </div>
        </div>
    </div>
</template>

<script setup>
    // 使用了自动导入
    const userStore = useStore('user')
    const confirm = () => {
        console.log(1)
    }
    const testStore = useStore('test')
    onMounted(() => {
        console.log('onmount==userstore', userStore)
    }),
        onShow(() => {
            console.log('onshow')
        })
</script>

<style lang="scss" scoped></style>

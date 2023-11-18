<script lang="ts" setup>
    import { useInit } from '@/hooks/useInit'
    import { UniCard } from '@uni-helper/uni-ui-types'
    const aa = reactive({
        A: 1,
    })
    onLoad(() => {
        const { pageName, pagePath, pageQuery } = useInit()
        console.log(pageName, pagePath, pageQuery, 'pageName,pagePath, pageQuery')
    })
    const a = ref<UniCard>()
</script>

<template>
    <div>
        profile
        <u-button type="primary" :color="'red'">提交</u-button>
        <u-icon name="checkbox-mark"></u-icon>
        <u-cell-group>
            <u-cell icon="setting-fill" title="个人设置"></u-cell>
            <u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
        </u-cell-group>
        <uni-card title="ss" @click=""> </uni-card>
        <u-icon name="checkbox-mark"></u-icon>
    </div>
</template>

<style lang="scss" scoped></style>

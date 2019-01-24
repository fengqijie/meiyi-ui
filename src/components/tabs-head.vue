<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="action"></slot>
    </div>
</template>

<script>
export default {
    name: 'mTabsHead',
    inject: ['eventBus'], //注入
    created() {},
}
</script>

<style lang="less" scoped>
.tabs-head {}
</style>



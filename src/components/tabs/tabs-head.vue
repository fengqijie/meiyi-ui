<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="action-wrapper">
            <slot name="action"></slot>
        </div>
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
.tabs-head {
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #e8e8e8;
    >.action-wrapper {
        margin-left: auto;
    }
}
</style>



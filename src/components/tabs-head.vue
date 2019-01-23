<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="action"></slot>
    </div>
</template>

<script>
export default {
    name: 'mTabsHead'
}
</script>

<style lang="less" scoped>
.tabs-head {}
</style>



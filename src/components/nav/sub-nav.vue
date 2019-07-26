<template>
    <div class="m-sub-nav">
        <span>
            <slot name="title"></slot>
        </span>
        <div class="m-sub-nav-popover">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MSubNav'
}
</script>

<style lang="less" scoped>
.m-sub-nav {
    position: relative;
    padding: 10px 20px;
    &-popover {
        position: absolute;
        top: 100%;
        left: 0;
        border: 1px solid #e8e8e8;
        white-space: nowrap;
    }
}
</style>


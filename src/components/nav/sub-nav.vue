<template>
    <div class="m-sub-nav">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="m-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MSubNav',
    data() {
        return {
            open: false
        }
    },
    methods: {
        onClick() {
            this.open = !this.open
        }
    }
}
</script>

<style lang="less" scoped>
.m-sub-nav {
    position: relative;
    > span {
        padding: 10px 20px;
        display: block;
    }
    &-popover {
        position: absolute;
        top: 100%;
        left: 0;
        border: 1px solid #e8e8e8;
        white-space: nowrap;
    }
}
</style>


<template>
    <div class="m-pagination">
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        for (let node of this.$el.children) {
            if(node.nodeName.toLowerCase() !== 'button') {
                console.log(`m-pagination 子元素应该全是 m-button, 但你写的是 ${node.nodeName}`)
            }
        }
    }
}
</script>


<style lang="less" scoped>
.m-pagination {
    display: inline-flex;
    vertical-align: middle;
    > .m-button {
        border-radius: 0;
        &:not(:first-child) {
            margin-left: -1px;
        }
        &:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        &:last-child {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
        &:hover {
            position: relative;
            z-index: 1;
        }
    }
}
</style>


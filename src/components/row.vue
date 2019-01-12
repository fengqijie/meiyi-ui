<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "mRow",
    props: {
        gutter: {
            type: [Number, String]
        }
    },
    computed: {
        rowStyle() {
            return {
                marginLeft: -this.gutter/2 + 'px',
                marginRight: -this.gutter/2 + 'px',
            }
        },
    },
    created() {
        // created 是创建这个组件，但没有放到页面里
        // mounted 是挂载到页面上
    },
    mounted() {
        console.log(this.$children)
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter
        })
    }
}
</script>


<style lang="less" scoped>
.row {
    display: flex;
}
</style>


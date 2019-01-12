<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "mRow",
    props: {
        gutter: {
            type: [Number, String]
        },
        align: {
            type: String,
            validator(value) {
                return ['left', 'right', 'center'].includes(value)
            }
        },
    },
    computed: {
        rowStyle() {
            return {
                marginLeft: -this.gutter/2 + 'px',
                marginRight: -this.gutter/2 + 'px',
            }
        },
        rowClass() {
            let {align} = this;
            return [
                align && `align-${align}`,
            ]
        }
    },
    created() {
        // created 是创建这个组件，但没有放到页面里
        // mounted 是挂载到页面上
    },
    mounted() {
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter
        })
    }
}
</script>


<style lang="less" scoped>
.row {
    display: flex;
    &.align-left {
        justify-content: flex-start;
    }
    &.align-right {
        justify-content: flex-end;
    }
    &.align-center {
        justify-content: center;
    }
}
</style>


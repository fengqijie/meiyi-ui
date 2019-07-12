<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            <slot>{{ result }}</slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <cascader-item :options="options" :selected="selected" @update:selected="onUpdateSelected"></cascader-item>
        </div>
    </div>
</template>

<script>
import CascaderItem from './cascader-item'
export default {
    name: 'Mcascader',
    components: { CascaderItem },
    props: {
        options: {
            type: Array
        },
        selected: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            popoverVisible: false,
        }
    },
    methods: {
        onUpdateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
        }
    },
    computed: {
        result() {
            return this.selected.map(item => item.name).join('/')
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/css/var.less';
.cascader {
    position: relative;
    .trigger {
        display: inline-block;
        border: 1px solid @border-color;
        border-radius: @border-radius;
        height: @height;
        line-height: @line-height;
        padding: 0 10px;
        min-width: 10em;
    }
    .popover {
        position: absolute;
        top: 100%;
        left: 0;
        background: #fff;
        border: 1px solid @border-color;
        margin-top: 3px;
    }
}
</style>



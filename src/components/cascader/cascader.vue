<template>
    <div class="cascader" ref="cascader" v-click-outside="close">
        <div class="trigger" @click="toggle">
            <slot>{{ result }}</slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <cascader-item :options="options" :selected="selected" @update:selected="onUpdateSelected"></cascader-item>
        </div>
    </div>
</template>

<script>
import CascaderItem from './cascader-item'
import { clickOutside } from '../../utils/index'
export default {
    name: 'Mcascader',
    components: { CascaderItem },
    directives: {clickOutside},
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
        open() {
            this.popoverVisible = true
        },
        close() {
            this.popoverVisible = false
        },
        toggle() {
            if(this.popoverVisible === true) {
                this.close()
            } else {
                this.open()
            }
        },
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
@import '../../assets/css/var.less';
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
        z-index: 1;
    }
}
</style>



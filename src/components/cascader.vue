<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="item in options" :key="item.code">
                <cascader-item :optionsItem="item"></cascader-item>
            </div>
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
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/css/var.less';
.cascader {}
</style>



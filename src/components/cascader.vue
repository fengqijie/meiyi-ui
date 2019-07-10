<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible != popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <cascader-item :options="options"></cascader-item>
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
    },
    data() {
        return {
            popoverVisible: true,
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/css/var.less';
.cascader {
    .trigger {}
}
</style>



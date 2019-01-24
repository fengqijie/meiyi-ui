<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'mTabs',
    props: {
        selected: {
            type: String,
            required: true,
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['horizontal', 'vertical'].includes(value)
            }
        },
    },
    data() {
        return {
            eventBus: new Vue(),
        }
    },
    created() {
        this.$
        // this.$emit('update: selected', 'xxx')
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
}
</script>

<style lang="less" scoped>
.tabs {}
</style>



<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'mTabsPane',
    inject: ['eventBus'],
    created() {
        this.eventBus.$on('update:selected', (name) => {
            console.log(name)
        })
    },
}
</script>

<style lang="less" scoped>
.tabs-pane {}
</style>



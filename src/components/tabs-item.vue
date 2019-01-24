<template>
    <div class="tabs-item" @click="headHandle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'mTabsItem',
    inject: ['eventBus'],
    props: {
        name: {
            type: String | Number,
            required: true,
        },
    },
    created() {
        this.eventBus.$on('update:selected', (name) => {
            console.log(name)
        })
    },
    methods: {
        headHandle() { 
            this.eventBus.$emit('update:selected', this.name)
        },
    },
}
</script>

<style lang="less" scoped>
.tabs-item {}
</style>



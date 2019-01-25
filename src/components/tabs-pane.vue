<template>
    <div class="tabs-pane" :class="activeClass" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'mTabsPane',
    inject: ['eventBus'],
    props: {
        name: {
            type: String | Number,
            required: true,
        },
    },
    data() {
        return {
            active: false,
        }
    },
    computed: {
        activeClass() {
            return {
                active: this.active
            }
        }
    },
    created() {
        this.eventBus.$on('update:selected', (name) => {
            this.active = name === this.name;
        })
    },
}
</script>

<style lang="less" scoped>
.tabs-pane {
    &.active {
        background: pink;
    }
}
</style>



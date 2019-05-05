<template>
    <div class="m_collapse_item">
        <div class="title" @click="toggle">{{ title }}</div>
        <div class="content" v-if="open"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: 'mCollapseItem',
    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            open: false,
        }
    },
    inject: ['eventBus'],
    mounted() {
        this.eventBus && this.eventBus.$on('update:selected', (names) => {
            if(names.indexOf(this.name) >= 0) {
                this.open = true
            } else {
                this.open = false
            }
        })
    },
    methods: {
        toggle() {
            if (this.open) {
                this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
            } else {
                this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
            }
        }
    }
}
</script>

<style lang="less" scoped>
@borderRadius: 4px;
@borderColor: #ddd;
.m_collapse_item {
    .title {
        border: 1px solid @borderColor;
        margin-top: -1px;
        margin-left: -1px;
        margin-right: -1px;
        min-height: 32px;
        display: flex;
        align-items: center;
        padding: 0 8px;
    }
    &:first-child {
        .title {
            border-top-left-radius: @borderRadius;
            border-top-right-radius: @borderRadius;
        }
    }
    &:last-child {
        .title:last-child {
            border-bottom-left-radius: @borderRadius;
            border-bottom-right-radius: @borderRadius;
        }
    }
}
</style>




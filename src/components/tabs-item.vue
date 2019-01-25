<template>
    <div class="tabs-item" @click="headHandle" :class="activeClass">
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
            // if(name === this.name) {
            //     this.active = true;
            //     console.log(`${this.name}被选中了`)
            // } else {
            //     this.active = false;
            //     console.log(`${this.name}没有被选中了`)
            // }
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
.tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    &.active {
        background: pink;
    }
}
</style>



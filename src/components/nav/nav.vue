<template>
    <div class="m-nav">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MNav', 
    provide() {
        return {
            root: this
        }
    },
    props: {
        selected: {
            type: Array,
            default: () => []
        },
        multiple: {
            type: Boolean,
            default: false
        } 
    },
    data() {
        return {
            items: []
        }
    },
    mounted() {
        this.updateChildren()
        this.listenToChildren()
    },
    updated() {
        this.updateChildren()
    },
    // computed: {
    //     items() {
    //         return this.$children.filter(vm => vm.$options.name === 'MNavItem')
    //     }
    // },
    methods: {
        addItem(vm) {
            this.items.push(vm)
        },
        updateChildren() {
            this.items.forEach(vm => {
                if(this.selected.includes(vm.name) >= 0) {
                    vm.selected = true
                } else {
                    vm.selected = false
                }
            });
        },
        listenToChildren() {
            this.items.forEach(vm => {
                vm.$on('add:selected', (name) => {
                    if(this.multiple) {
                        if(this.selected.indexOf(name) < 0) {
                            let copy = JSON.parse(JSON.stringify(this.selected))
                            copy.push(name)
                            this.$emit('update:selected', copy)
                        }
                    } else {
                        this.$emit('update:selected', [name])
                    }
                })
            })
        }
    }
}
</script>

<style lang="less" scoped>
.m-nav {
    display: flex;
    border: 1px solid #e8e8e8;
}
</style>


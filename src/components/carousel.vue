<template>
    <div class="m-carousel">
        <div class="m-carousel-window">
            <div class="m-carouse-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="m-carousel-dots">
            <span
                v-for="n in childrenLength"
                :key="n"
                :class="{active: selectedIndex === n-1}"
                @click="select(n-1)"
            >{{ n }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'mCarousel',
    props: {
        selected: {
            type: String
        },
        autoPlay: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            childrenLength: 0
        }
    },
    mounted() {
        this.childrenLength = this.$children.length
        this.updateChild()
        this.playAutomaticlly()
    },
    updated() {
        this.updateChild()
    },
    methods: {
        select(index) {
            this.$emit('update:selected', this.names[index])
        },
        updateChild() {
            let selected = this.getSelected()
            this.$children.forEach(vm => {
                vm.selected = selected
            })
        },
        getSelected() {
            let first = this.$children[0]
            return this.selected || first.name
        },
        playAutomaticlly() {
            let index = this.names.indexOf(this.getSelected())
            let run = () => {
                if(index === this.names.length) {
                    index = 0
                }
                this.$emit('update:selected', this.names[index + 1])
                index++
                setTimeout(run, 3000)
            }
            run()
        }
    },
    computed: {
        selectedIndex() {
            return this.names.indexOf(this.selected) || 0
        },
        names() {
            return this.$children.map(vm => vm.name)
        }
    }
}
</script>

<style lang="less" scoped>
.m-carousel {
    &-window {
        overflow: hidden;
    }
    &-wrapper {
        position: relative;
    }
    .m-carousel-dots {
        span {
            display: inline-block;
            padding: 0 6px;
            margin: 0 5px;
            border-radius: 50%;
            &.active {
                background: #ccc;
            }
        }
    }
}
</style>



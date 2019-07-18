<template>
    <div class="m-carousel" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
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
            childrenLength: 0,
            timer: undefined
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
                this.$nextTick(() => {
                    vm.selected = selected
                })
            })
        },
        getSelected() {
            let first = this.$children[0]
            return this.selected || first.name
        },
        playAutomaticlly() {
            if(this.timer) {return}
            let index = this.names.indexOf(this.getSelected())
            let run = () => {
                if(index === this.names.length) {
                    index = 0
                }
                this.$emit('update:selected', this.names[index + 1])
                index++
                this.timer = setTimeout(run, 3000)
            }
            run()
        },
        pause() {
            window.clearTimeout(this.timer)
            this.timer = undefined
        },
        onMouseEnter() {
            this.pause()
        },
        onMouseLeave() {
            this.playAutomaticlly()
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
    position: relative;
    &-window {
        overflow: hidden;
    }
    &-wrapper {
        position: relative;
    }
    .m-carousel-dots {
        display: flex;
        justify-content: center;
        padding: 8px;
        span {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 1.4em;
            height: 1.4em;
            border-radius: 50%;
            margin: 0 0.2em;
            font-size: 12px;
            &.active {
                background: #ccc;
                &:hover {
                    cursor: default;
                }
            }
            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>



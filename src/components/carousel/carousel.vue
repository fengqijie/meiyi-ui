<template>
    <div
        class="m-carousel"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        >
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
            timer: undefined,
            startTouch: undefined
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
            if(index === -1) {index = this.names.length - 1}
            if(index === this.names.length) {index = 0}
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
                this.timer = setTimeout(run, 5000)
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
        },
        onTouchStart(e) {
            this.pause()
            if(e.touches.length > 1) {return}
            this.startTouch = e.touches[0]
        },
        onTouchMove() {
            // console.log("移动")
        },
        onTouchEnd(e) {
            let endTouch = e.changedTouches[0]
            let {clientX: x1, clientY: y1} = this.startTouch
            let {clientX: x2, clientY: y2} = endTouch
            
            let distanceX = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
            let distanceY = Math.abs(y2 - y1)
            let rate = distanceX / distanceY
            if(rate > 2) {
                if(x2 > x1) {
                    this.select(this.selectedIndex - 2)
                } else {
                    this.select(this.selectedIndex)
                }
            }
            this.$nextTick(() => {
                this.playAutomaticlly()
            })
        },
    },
    computed: {
        selectedIndex() {
            let currentIndex = this.names.indexOf(this.selected)
            return currentIndex === -1 ? 0 : currentIndex
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



<template>
    <transition name="slide">
        <div v-if="visible" class="m-carousel-item">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'mCarouselItem',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            // visible: false,
            selected: undefined
        }
    },
    computed: {
        visible() {
            return this.selected === this.name
        }
    }
}
</script>

<style lang="less" scoped>
.slide-leave-active {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.slide-enter-active, .slide-leave-active {
  transition: all 1s;
}
.slide-enter {
    transform: translateX(100%);
}
.slide-leave {
    transform: translateX(-100%);
}
.m-carousel-item {}
</style>



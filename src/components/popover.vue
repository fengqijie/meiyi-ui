<template>
    <div class="popover" @click.stop="showPopover">
        <div class="content-wrapper" ref="contentWrapper" v-if="visible" @click.stop>
            <!-- slot 不支持引用，也就是ref -->
            <slot name="content"></slot>
        </div>
        <span ref="trigger">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: 'mPopover',
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        showPopover() {
            this.visible = !this.visible;
            if(this.visible === true) {
                this.$nextTick(() => {
                    document.body.appendChild(this.$refs.contentWrapper);
                    // 获取span的位置
                    let {width, height, top, left} = this.$refs.trigger.getBoundingClientRect();
                    // console.log({width, height, top, left})
                    this.$refs.contentWrapper.style.left = left + 'px';
                    this.$refs.contentWrapper.style.top = top + 'px';

                    let handle = ()=>{
                        this.visible = false;
                        document.removeEventListener('click', handle)
                    };
                    document.addEventListener('click', handle);
                })
                
            }
        },
    },
    mounted() {
    }
}
</script>

<style lang="less" scoped>
.popover {
    position: relative;
    display: inline-block;
    vertical-align: top;
}
.content-wrapper {
    position: absolute;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    // line-height: 1.5;
    // padding: 8 12px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
}
</style>



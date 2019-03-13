<template>
    <div class="popover" ref="popover" @click.stop="showPopover">
        <div class="content-wrapper" ref="contentWrapper" v-if="visible" @click.stop>
            <!-- slot 不支持引用，也就是ref -->
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrpper">
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
        showPopover(event) {
            if (this.$refs.triggerWrpper.contains(event.target)) {
                if(this.visible === true) {
                    this.close()
                } else {
                    this.open()
                }
            }
        },
        open() {
            this.visible = true;
            this.$nextTick(() => {
                this.positionContent()
                document.addEventListener('click', this.onClickDocument);
            })
        },
        positionContent() {
            document.body.appendChild(this.$refs.contentWrapper);
            // 获取span的位置
            let {width, height, top, left} = this.$refs.triggerWrpper.getBoundingClientRect();
            // console.log({width, height, top, left})
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
        },
        onClickDocument(e) {
            if (this.$refs.popover && this.$refs.contentWrapper.contains(e.target)) { return }
            this.close()
        },
        close() {
            this.visible = false;
            document.removeEventListener('click', this.onClickDocument)
        }
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
    width: 18em;
}
</style>



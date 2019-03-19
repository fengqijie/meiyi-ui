<template>
    <div class="popover" ref="popover" @click.stop="showPopover">
        <div class="content-wrapper" ref="contentWrapper" v-if="visible" @click.stop>
            <!-- slot 不支持引用，也就是ref -->
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrpper" class="btn_span">
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
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
        },
        onClickDocument(e) {
            if (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target)) { return }
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
    line-height: 1.5;
    padding: 0.5em 1em;
    background-color: #ffffff;
    // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
    transform: translateY(-100%);
    max-width: 20em;
    margin-top: -10px;
    word-break: break-all; // 中文网站用这个，英文网站不要用
    &::before,
    &::after {
        position: absolute;
        left: 10px;
        content: '';
        display: block;
        border: 10px solid transparent;
    }
    &::before {
        top: 100%;
        border-top-color: #e8e8e8;
    }
    &::after {
        top: calc(100% - 1px);
        border-top-color: #ffffff;
    }
}
.btn_span {
    display: inline-block;
}
</style>



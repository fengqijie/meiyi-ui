<template>
    <div class="popover" ref="popover">
        <div class="content-wrapper" :class="{[`position-${position}`]: true}" ref="contentWrapper" v-if="visible" @click.stop>
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
    props: {
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
            }
        },
        trigger: {
            type: String,
            default: 'click',
            validator(value) {
                return ['click', 'hover'].indexOf(value) >= 0
            }
        }
    },
    mounted() {
        if (this.trigger === 'click') {
            this.$refs.popover.addEventListener('click', this.showPopover)
        } else {
            this.$refs.popover.addEventListener('mouseenter', this.open)
            this.$refs.popover.addEventListener('mouseleave', this.close)
        }
    },
    methods: {
        showPopover(event) {
            if (this.$refs.triggerWrpper.contains(event.target)) {
                if(this.visible === true) {
                    this.close()
                    console.log('showPopover 关闭')
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
            const { contentWrapper, triggerWrpper } = this.$refs;
            document.body.appendChild(contentWrapper);
            // 获取span的位置
            const { width, height, top, left } = triggerWrpper.getBoundingClientRect();
            const {height: selfHeight} = contentWrapper.getBoundingClientRect();
            let x = {
                top: {
                    top: top + window.scrollY,
                    left: left + window.scrollX
                },
                bottom: {
                    top: top + height + window.scrollY,
                    left: left + window.scrollX
                },
                left: {
                    top: top + window.scrollY + (height-selfHeight) / 2,
                    left: left + window.scrollX
                },
                right: {
                    top: top + window.scrollY + (height-selfHeight) / 2,
                    left: left + width + window.scrollX
                },
            }
            contentWrapper.style.left = x[this.position].left + 'px';
            contentWrapper.style.top = x[this.position].top + 'px';
        },
        onClickDocument(e) {
            if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) { return }
            this.close()
        },
        close() {
            this.visible = false;
            document.removeEventListener('click', this.onClickDocument)
        }
    },
    destroyed() {
        // this.$refs.popover.removeEventListener('click', this.showPopover)
        // this.$refs.popover.removeEventListener('mouseenter', this.open)
        // this.$refs.popover.removeEventListener('mouseleave', this.close)
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
    // box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
    max-width: 20em;
    word-break: break-all; // 中文网站用这个，英文网站不要用
    &::before,
    &::after {
        position: absolute;
        content: '';
        display: block;
        border: 10px solid transparent;
    }
    &.position-top {
        transform: translateY(-100%);
        margin-top: -10px;
        &::before,
        &::after {
            left: 10px;
        }
        &::before {
            top: 100%;
            border-top-color: #e8e8e8;
            border-bottom: none;
        }
        &::after {
            top: calc(100% - 1px);
            border-top-color: #ffffff;
            border-bottom: none;
        }
    }
    &.position-bottom {
        margin-top: 10px;
        &::before,
        &::after {
            left: 10px;
        }
        &::before {
            bottom: 100%;
            border-bottom-color: #e8e8e8;
            border-top: none;
        }
        &::after {
            bottom: calc(100% - 1px);
            border-bottom-color: #ffffff;
            border-top: none;
        }
    }
    &.position-left {
        transform: translateX(-100%);
        margin-left: -10px;
        &::before,
        &::after {
            top: 50%;
            transform: translateY(-50%);
        }
        &::before {
            left: 100%;
            border-left-color: #e8e8e8;
            border-right: none;
        }
        &::after {
            left: calc(100% - 1px);
            border-left-color: #ffffff;
            border-right: none;
        }
    }
    &.position-right {
        margin-left: 10px;
        &::before,
        &::after {
            top: 50%;
            transform: translateY(-50%);
        }
        &::before {
            right: 100%;
            border-right-color: #e8e8e8;
            border-left: none;
        }
        &::after {
            right: calc(100% - 1px);
            border-right-color: #ffffff;
            border-left: none;
        }
    }
}
.btn_span {
    display: inline-block;
}
</style>



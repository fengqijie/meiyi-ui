<template>
    <div class="toast" :class="toastClasses">
        <slot></slot>
        <span v-if="closeButton" class="close" @click="handleClose">{{ closeButton.text }}</span>
    </div>
</template>

<script>
export default {
    name: 'mToast',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 3000
        },
        closeButton: {
            type: Object,
            default() {
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'middle'].includes(value)
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        toastClasses() {
            return {
                [`position-${this.position}`]: true
            }
        }
    },
    mounted() {
        this.execAutoClose();
    },
    methods: {
        close() {
            this.$el.remove(); // 移除元素
            this.$emit('close');
            this.$destroy(); // 销毁组件
        },
        handleClose() {
            this.close();
            if (this.closeButton && typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this);
            }
        },
        execAutoClose() {
            if (this.autoClose) {
            setTimeout(() => {
                this.close()
            }, this.autoCloseDelay)
        }
        },
    },
}
</script>

<style lang="less" scoped>
.toast {
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    align-items: center;
    padding: 10px;
    background: rgba(0,0,0,0.75);
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    // min-height: 40px;
    line-height: 1.8;
    z-index: 21;
    &.position-top {
        top: 0;
        transform: translate(-50%);
    }
    &.position-bottom {
        bottom: 0;
        transform: translate(-50%);
    }
    &.position-middle {
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .close {
        padding-left: 16px;
        margin-left: 16px;
        border-left: 1px solid #fff;
        cursor: pointer;
        flex-shrink: 0;
    }
}
</style>




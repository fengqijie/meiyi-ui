<template>
    <div class="toast">
        <slot></slot>
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
    },
    mounted() {
        if (this.autoClose) {
            setTimeout(() => {
                this.close()
            }, this.autoCloseDelay)
        }
    },
    methods: {
        close() {
            this.$el.remove();
            this.$destroy();
        },
    },
}
</script>

<style lang="less" scoped>
.toast {
    padding: 10px;
    background: rgba(0,0,0,0.75);
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    align-items: center;
}
</style>




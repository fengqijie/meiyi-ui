<template>
    <div>
        <m-button @click="showToast">点击弹出toast</m-button>
    </div>
</template>

<script>
export default {
    methods: {
        showToast() {
            this.$toast(`这是一条 toast 提示`)
        }
    }
}
</script>
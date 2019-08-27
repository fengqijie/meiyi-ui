<template>
    <div>
        <m-button @click="showToast('top')">上方弹出</m-button>
        <m-button @click="showToast('middle')">中间弹出</m-button>
        <m-button @click="showToast('bottom')">下方弹出</m-button>
    </div>
</template>

<script>
export default {
    methods: {
        showToast(location) {
            this.$toast(`这是一条 toast 提示`, {
                position: location || 'top',
            })
        }
    }
}
</script>
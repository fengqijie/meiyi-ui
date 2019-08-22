<template>
    <div>
        <m-button type="primary" icon="search" :loading="isLoading" @click="isLoading = !isLoading">搜索中</m-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: true,
        }
    }
}
</script>
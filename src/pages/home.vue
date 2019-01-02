<template>
    <div>
        <m-button icon="search" icon-position="right" :loading="isLoading" @click="isLoading = !isLoading">查询</m-button>
        <m-button icon="search">查询</m-button>
    </div>
</template>

<script>
import mButton from '@/components/button'

export default {
    data() {
        return {
            isLoading: false
        }
    },
    components: {
        mButton,
    },
    
}
</script>


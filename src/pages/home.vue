<template>
    <div>
        <m-button icon="search" icon-position="right" :loading="isLoading" @click="isLoading = !isLoading">查询</m-button>
        <m-button icon="search">查询</m-button>
        <m-pagination>
            <m-button icon="left">上一页</m-button>
            <m-button>更多</m-button>
            <m-button icon="right" icon-position="right">下一页</m-button>
        </m-pagination>
        <m-input></m-input>
    </div>
</template>

<script>
import mButton from '@/components/button'
import mPagination from '@/components/pagination'
import mInput from '@/components/input'

export default {
    data() {
        return {
            isLoading: false
        }
    },
    components: {
        mButton,
        mPagination,
        mInput
    },
    
}
</script>




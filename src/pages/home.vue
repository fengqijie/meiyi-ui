<template>
    <div>
        <m-button icon="search" icon-position="right" :loading="isLoading" @click="isLoading = !isLoading">查询</m-button>
        <m-button icon="search">查询</m-button>
        <m-pagination>
            <m-button icon="left">上一页</m-button>
            <m-button>更多</m-button>
            <m-button icon="right" icon-position="right">下一页</m-button>
        </m-pagination>
        <m-input value="请输入" v-model="message"></m-input>
        <p>{{ message }}</p>
        <button @click="message+=1">js改变input</button>
        <m-row>
            <m-col span="2"></m-col>
            <m-col span="22"></m-col>
        </m-row>
    </div>
</template>

<script>
import mButton from '@/components/button'
import mPagination from '@/components/pagination'
import mInput from '@/components/input'
import mRow from '@/components/row'
import mCol from '@/components/col'

export default {
    data() {
        return {
            isLoading: false,
            message: 'hi'
        }
    },
    components: {
        mButton,
        mPagination,
        mInput,
        mRow,
        mCol
    },
    methods: {},
}
</script>




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
        <button style="margin-bottom: 30px;" @click="message+=1">js改变input</button>
        <m-row gutter="20" align="center">
            <m-col span="4">左边</m-col>
            <m-col span="18" offset="1">右边</m-col>
        </m-row>
        <button @click="showToast" style="margin: 30px 0;">点击弹出toast</button>
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
        mCol,
    },
    methods: {
        showToast() {
            this.$toast(`我是message${parseInt(Math.random() * 100)}`, {
                position: 'middle',
                // closeButton: {
                //     text: '请关掉',
                //     callback(toast) {
                //         console.log(toast)
                //     }
                // }
            })
        }
    },
}
</script>




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

        <!-- 
            这两种写法是一样的，vue 的语法糖
            <m-tabs selected.sync="selectedTab">
            <m-tabs selected="selectedTab" @update:selected="selectedTab = $event">
         -->
        <m-tabs :selected.sync="selectedTab">
            <m-tabs-head action="设置">
                <m-tabs-item name="beauty">美女</m-tabs-item>
                <m-tabs-item name="financeEconomics">财经</m-tabs-item>
                <m-tabs-item name="sports">体育</m-tabs-item>
            </m-tabs-head>
            <m-tabs-body>
                <m-tabs-pane name="beauty">美女相关内容</m-tabs-pane>
                <m-tabs-pane name="financeEconomics">财经相关内容</m-tabs-pane>
                <m-tabs-pane name="sports">体育相关内容</m-tabs-pane>
            </m-tabs-body>
        </m-tabs>

        <div style="margin: 40px 100px">
            <m-popover position="bottom">
                <template slot="content">
                    <div>我是内容</div>
                </template>
                <template>
                    <m-button>点击展示popover</m-button>
                </template>
            </m-popover>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isLoading: false,
            message: 'hi',
            selectedTab: 'beauty',
        }
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




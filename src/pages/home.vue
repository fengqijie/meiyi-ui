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
        
        <m-collapse style="margin-bottom: 40px;" :selected.sync="wenzi">
            <m-collapse-item title="标题1" name="1">内容1</m-collapse-item>
            <m-collapse-item title="标题2" name="2">内容2</m-collapse-item>
            <m-collapse-item title="标题3" name="3">内容3</m-collapse-item>
        </m-collapse>
        <m-cascader :options="cascaderList" :selected.sync="selected"></m-cascader> 
        <div style="width: 300px; margin: 30px 0">
            <m-carousel :selected.sync="selectedSlide">
                <m-carousel-item name="1"><div class="slide">one</div></m-carousel-item>
                <m-carousel-item name="2"><div class="slide">two</div></m-carousel-item>
                <m-carousel-item name="3"><div class="slide">three</div></m-carousel-item>
                <m-carousel-item name="4"><div class="slide">four</div></m-carousel-item>
            </m-carousel>
        </div>
        <div style="margin: 30px 0">
            <m-nav :selected.sync="navSelected">
                <m-nav-item name="home">首页</m-nav-item>
                <m-sub-nav>
                    <template slot="title">关于</template>
                    <m-nav-item name="cultures">企业文化</m-nav-item>
                    <m-nav-item name="contacts">联系我们</m-nav-item>
                </m-sub-nav>
                <m-nav-item name="hire">招聘</m-nav-item>
            </m-nav>
        </div>
        <div style="margin: 30px 0">
            <label>请输入邮箱号码:</label>
            <input type="text" v-model="regInputVal" @mouseleave="onInput"/>
        </div>
        <div style="margin: 30px 0">
            <m-pager :total-page="20" :current-page.sync="currentPage"></m-pager>
        </div>
    </div>
</template>

<script>
import Validator from '@/utils/validate.js'

export default {
    data() {
        return {
            isLoading: false,
            message: 'hi',
            selectedTab: 'beauty',
            wenzi: [],
            cascaderList: [
                {
                    name: '浙江',
                    code: 1,
                    children: [
                        {
                            name: '杭州',
                            code: 12,
                            children: [
                                { name: '上城区' },
                                { name: '下城区' },
                                { name: '江干区' },
                            ]
                        },
                        { name: '嘉兴', code: 13 },
                        { name: '湖州', code: 14 }
                    ]
                }, {
                    name: '福建',
                    code: 2,
                    children: [
                        { name: '福州', code: 21 },
                        { name: '厦门', code: 22 },
                        { name: '泉州', code: 23 }
                    ]
                },
            ],
            selected: [],
            selectedSlide: '1',
            navSelected: ['cultures'],
            regInputVal: '',
            currentPage: 1
        }
    },
    methods: {
        onInput() {
            let validator = new Validator()
            // console.log(validator)
            let rules = [
                { key: 'email', required: true }
            ]
            validator.required(this.regInputVal)
        },
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
        },
    },
}
</script>

<style lang="less" scoped>
.slide {
    box-sizing: border-box;
    height: 150px;
    background: #f7f7f7;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 150px;
}
</style>





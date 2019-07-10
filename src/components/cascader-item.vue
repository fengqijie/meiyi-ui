<template>
    <div class="cascader-item">
        <div class="left">
            <div
                class="label"
                v-for="item in options"
                :key="item.code"
                @click="leftSelected = item"
            >{{ item.name }}</div>
        </div>
        <div class="right" v-if="rightItems">
            <m-cascader-item :options="rightItems"></m-cascader-item>
        </div>
    </div>
</template>

<script>
export default {
    name: 'm-cascader-item',
    props: {
        options: {
            type: Array
        }
    },
    data() {
        return {
            leftSelected: null
        }
    },
    computed: {
        rightItems() {
            if(this.leftSelected && this.leftSelected.children) {
                return this.leftSelected.children
            } else {
                return null
            }
        }
    }
}
</script>

<style lang="less" scoped>
.cascader-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .left {
        border: 1px solid #e8e8e8;
    }
    .right {
        margin-top: -1px;
    }
}
</style>



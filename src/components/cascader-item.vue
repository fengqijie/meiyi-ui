<template>
    <div class="cascader-item">
        {{ optionsItem.name }}
        <div v-if="optionsItem.children">
            <cascader-item
                v-for="item in optionsItem.children"
                :key="item.code"
                :optionsItem="item"
            ></cascader-item>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cascader-item',
    props: {
        optionsItem: {
            type: Object
        }
    }
}
</script>

<style lang="less" scoped>
.cascader-item {
    border: 1px solid red;
    margin: 5px;
}
</style>



<template>
    <div class="m-input"><input type="text"/></div>
</template>

<script>
export default {
    name: "m-input"
}
</script>


<style lang="less" scoped>
.m-input {
    margin: 20px 0;
    @height: 32px;
    @border-color: #999;
    @border-hover-color: #666;
    >input {
        height: @height;
        border: 1px solid @border-color;
        border-radius: 4px;
        outline: none;
        padding: 0;
        box-sizing: border-box;
        &:hover {
            border-color: @border-hover-color;
        }
    }
}
</style>


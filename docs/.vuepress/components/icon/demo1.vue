<template>
    <ul class="m-icon-list">
        <li v-for="name in iconList" :key="name">
            <m-icon :name="name"></m-icon>
            <span>{{ name }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            iconList: ['up', 'down', 'left', 'right', 'settings', 'error', 'search', 'loading', 'download', 'thumbs-up']
        }
    }
}
</script>

<style lang="less" scoped>
.m-icon-list {
    font-size: 3em;
    margin: 20px 0;
    padding: 0;
    li {
        display: inline-block;
        width: 16.66%;
        list-style: none;
        text-align: center;
        padding: 0 16px 5px;
        border-radius: 4px;
        span {
            display: block;
            font-size: 14px;
        }
    }
}
</style>
<template>
    <svg class="m-icon" @click="$emit('click', $event)">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
export default {
    props: ['name'],
    mounted () {
        import("./iconFont")
    },
}
</script>


<style lang="less" scoped>
.m-icon {
    width: 1em;
    height: 1em;
    fill: #666;
}
</style>


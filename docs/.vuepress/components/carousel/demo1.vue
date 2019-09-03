<template>
    <m-carousel :selected.sync="selectedSlide">
        <m-carousel-item name="1"><div class="slide">one</div></m-carousel-item>
        <m-carousel-item name="2"><div class="slide">two</div></m-carousel-item>
        <m-carousel-item name="3"><div class="slide">three</div></m-carousel-item>
        <m-carousel-item name="4"><div class="slide">four</div></m-carousel-item>
    </m-carousel>
</template>

<script>
export default {
    data() {
        return {
            selectedSlide: '1'
        }
    }
}
</script>

<style lang="less" scoped>
.m-carousel-item {
    height: 100px;
    line-height: 100px;
    background-color: #d3dce6;
    text-align: center;
}
</style>
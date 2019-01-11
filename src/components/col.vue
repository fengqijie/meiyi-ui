<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "mCol",
    props: {
        span: {
            type: [Number, String]
        }
    },
}
</script>


<style lang="less" scoped>
.generate-columns(24);

.generate-columns(@n, @i: 1) when (@i =< @n) {
    .col-@{i} {
        width: (@i * 100% / @n);
    }
    .generate-columns(@n, (@i + 1));
}
.col {
    height: 100px;
    background: pink;
    // width: 50%;
    border: 1px solid red;
}
</style>
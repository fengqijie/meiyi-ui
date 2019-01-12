<template>
    <div 
        class="col" 
        :class="[`col-${span}`, offset && `offset-${offset}`]"
        :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}"
        >
        <div style="border: 1px solid yellow">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "mCol",
    props: {
        span: {
            type: [Number, String]
        },
        offset: {
            type: [Number, String]
        }
    },
    data() {
        return {
            gutter: 0
        }
    }
}
</script>


<style lang="less" scoped>
.generate-columns(24);

.generate-columns(@n, @i: 1) when (@i =< @n) {
    .col-@{i} {
        width: (@i * 100% / @n);
    }
    .offset-@{i} {
        margin-left: (@i * 100% / @n);
    }
    .generate-columns(@n, (@i + 1));
}
.col {
    height: 100px;
    background: pink;
    border: 1px solid red;
}
</style>
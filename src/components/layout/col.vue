<template>
    <div 
        class="col" 
        :class="colClass"
        :style="colStyle"
        >
        <slot></slot>
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
    },
    computed: {
        // 一个属性随另一个变化，要用到computed
        colClass() {
            let {span, offset} = this;
            return [
                span && `col-${span}`,
                offset && `offset-${offset}`
            ]
        },
        colStyle() {
            return {
                paddingLeft: this.gutter/2 + 'px',
                paddingRight: this.gutter/2 + 'px'
            }
        },
    },
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
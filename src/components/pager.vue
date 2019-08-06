<template>
    <div class="m-pager" :class="{hide: hideIfOnePage === true && totalPage <= 1}">
        <span class="m-pager-nav prev" :class="{disabled: currentPage === 1}" @click="onClickPage(currentPage-1)">
            <m-icon name="left"></m-icon>
        </span>
        <template v-for="page in pages">
            <template v-if="page === currentPage">
                <span class="current" :key="page">{{page}}</span>
            </template>
            <template v-else-if="page === '...'">
                <span class="separator" :key="page">{{page}}</span>
            </template>
            <template v-else>
                <span class="other" :key="page" @click="onClickPage(page)">{{page}}</span>
            </template>
        </template>
        <span class="m-pager-nav next" :class="{disabled: currentPage === totalPage}" @click="onClickPage(currentPage+1)">
            <m-icon name="right"></m-icon>
        </span>
    </div>
</template>

<script>
export default {
    name: 'MPager',
    props: {
        totalPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        hideIfOnePage: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        pages() {
            let pages = unique(
                [1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2]
                .filter(n => n >= 1 && n <= this.totalPage)
                .sort((a, b) => a - b))
                .reduce((prev, current, index, array) => {
                    prev.push(current)
                    array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...')
                    return prev
            }, [])
            return pages
        }
    },
    methods: {
        onClickPage(num) {
            if(num >= 1 && num <= this.totalPage) {
                this.$emit('update:currentPage', num)
            }
        }
    }
}

function unique(array) {
    // return [...new Set(array)]
    const obj = {}
    array.map((number) => {
        obj[number] = true
    })
    // console.log(Object.keys(obj))
    return Object.keys(obj).map((str) => parseInt(str, 10))
}
</script>

<style lang="less" scoped>
@import '../assets/css/var.less';
.m-pager {
    &.hide {
        display: none;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
        margin: 0 4px;
        border: 1px solid @border-color;
        border-radius: @border-radius;
        padding: 0 4px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        min-height: 22px;
        min-width: 16px;
        cursor: pointer;
        &.current,
        &:hover {
            border-color: @blue;
        }
        &.current {
            cursor: default;
        }
        &.separator {
            border: none;
            cursor: default;
        }
        &.m-pager-nav {
            border: none;
        }
        &.disabled {
            cursor: default;
            .m-icon {
                fill: #cccccc;
            }
        }
    }
}
</style>



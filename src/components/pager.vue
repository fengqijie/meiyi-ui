<template>
    <div class="m-pager">
        <span
            v-for="page in pages"
            :key="page" class="m-pager-item"
            :class="{active: page === currentPage, separator: page === '...'}"
        >{{ page }}</span>
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
            default: true
        }
    },
    data() {
        let pages = [1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2]
        let u = unique(pages.sort((a, b) => a - b))
        let u2 = u.reduce((prev, current, index) => {
            if(u[index+1] !== undefined && u[index+1] - u[index] > 1) {
                prev.push(current)
                prev.push('...')
            } else {
                prev.push(current)
            }
            return prev
        }, [])
        return {
            pages: u2
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
    &-item {
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
        &.active,
        &:hover {
            border-color: @blue;
        }
        &.active {
            cursor: default;
        }
        &.separator {
            border: none;
            cursor: default;
        }
    }
}
</style>



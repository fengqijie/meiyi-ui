<template>
    <div class="cascader-item">
        <div class="left">
            <div
                class="label"
                v-for="item in options"
                :key="item.code"
                @click="onClickLabel(item)"
            >
                <span class="name">{{ item.name }}</span>
                <span v-if="item.children" class="icon"> > </span>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <m-cascader-item :options="rightItems" :level="level + 1" :selected="selected" @update:selected="onUpdateSelected"></m-cascader-item>
        </div>
    </div>
</template>

<script>
export default {
    name: 'm-cascader-item',
    props: {
        options: {
            type: Array
        },
        selected: {
            type: Array,
            default: () => []
        },
        level: {
            type: Number,
            default: 0
        }
    },
    computed: {
        rightItems() {
            // if(this.selected && this.selected[this.level]) {
            //     let item = this.options.filter(item => item.name === this.selected[this.level].name)
            //     if(item && item[0].children && item[0].children.length > 0) {
            //         return item.children
            //     }
            // }
            let currentSelected = this.selected[this.level]
            if(currentSelected && currentSelected.children) {
                return currentSelected.children
            } else {
                return null
            }
        }
    },
    methods: {
        onClickLabel(item) {
            // this.$set(this.selected, this.level, item)
            let copy = JSON.parse(JSON.stringify(this.selected))
            copy[this.level] = item
            copy.splice(this.level + 1)
            this.$emit('update:selected', copy)
        },
        onUpdateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
        }
    }
}
</script>

<style lang="less" scoped>
.cascader-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 200px;
    .left {
        height: 200px;
        padding: .3em 0;
    }
    .right {
        border-left: 1px solid #e8e8e8;
        // margin-top: -1px;
    }
    .label {
        padding: .3em 1em;
        display: flex;
        &:hover {
            background: #f7f7f7;
        }
        .name {
            margin-right: 1em;
        }
        .icon {
            color: #ccc;
            font-size: 12px;
            line-height: 1.8;
            font-weight: 300;
            margin-left: auto;
        }
    }
}
</style>



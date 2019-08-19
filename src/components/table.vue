<template>
    <div class="m-table-wrapper">
        <table class="m-table" :class="{striped: striped === true}">
            <thead>
                <tr>
                    <th><input type="checkbox" @change="onChangeAllItem" ref="allChecked" :checked="isAllItemsSelected"></th>
                    <th v-for="column in columns" :key="column.field">
                        <div class="m-table-header">
                            {{ column.text }}
                            <span v-if="column.field in orderBy" class="m-table-sorter" @click="changeOrderBy(column.field)">
                                <m-icon name="up" :class="{active: orderBy[column.field] === 'ascend'}"></m-icon>
                                <m-icon name="down" :class="{active: orderBy[column.field] === 'descend'}"></m-icon>
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in dataSource" :key="item.id">
                    <td>
                        <input
                            type="checkbox"
                            @change="onChangeItem(item, index, $event)"
                            :checked="inSelectedItems(item)"
                        >
                    </td>
                    <template v-for="column in columns">
                        <td :key="column.field">{{ item[column.field] }}</td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'MeiTable',
    props: {
        columns: {
            type: Array,
            required: true
        },
        dataSource: {
            type: Array,
            required: true,
            validator(array) {
                return array.filter(item => item.id === undefined).length > 0 ? false : true
            }
        },
        striped: {
            type: Boolean,
            default: false
        },
        selectedItems: {
            type: Array,
            default: () => []
        },
        orderBy: {
            type: Object,
            default: () => ({}),
            // validator(obj) {
            //     // 在vue里面 无法在一个属性里判断另一个属性的合法性
            // } 
        }
    },
    methods: {
        changeOrderBy(key) {
            const copy = JSON.parse(JSON.stringify(this.orderBy))
            let oldValue = copy[key]
            if (oldValue === 'ascend') {
                copy[key] = 'descend'
            } else if (oldValue === 'descend') {
                copy[key] = true
            } else {
                copy[key] = 'ascend'
            }
            
            this.$emit('update:orderBy', copy)
        },
        onChangeItem(item, index, e) {
            let selected = e.target.checked
            let copy = JSON.parse(JSON.stringify(this.selectedItems))
            if(selected) {
                copy.push(item)
            } else {
                copy = copy.filter(i => i.id !== item.id)
            }
            this.$emit('update:selectedItems', copy)
        },
        onChangeAllItem(e) {
            let selected = e.target.checked
            if(selected) {
                this.$emit('update:selectedItems', this.dataSource)
            } else {
                this.$emit('update:selectedItems', [])
            }
            // this.$emit('update:selectedItems', selected ? this.dataSource : [])
        },
        inSelectedItems(item) {
            return this.selectedItems.filter(i => i.id === item.id).length > 0
        }
    },
    watch: {
        selectedItems() {
            if (this.selectedItems.length === this.dataSource.length) {
                this.$refs.allChecked.indeterminate = false
            } else if (this.selectedItems.length === 0) {
                this.$refs.allChecked.indeterminate = false
            } else {
                this.$refs.allChecked.indeterminate = true
            }
        }
    },
    computed: {
        isAllItemsSelected() {
            // 判断两个数组含有的id是一样的
            const a = this.dataSource.map(item => item.id).sort()
            const b = this.selectedItems.map(item => item.id).sort()
            if (a.length !== b.length) {
                return false
            }
            let equal = true
            for (let i = 0; i < a.length; i++) {
                if(a[i] !== b[i]) {
                    equal = false
                    break
                }
            }
            return equal
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/css/var.less';

.m-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid @border-color;
    th,td {
        // border: 1px solid @border-color;
        border-bottom: 1px solid @border-color;
        text-align: center;
    }
    &.striped {
        tbody {
            > tr {
                &:nth-child(even) {
                    background-color: #fafafa;
                }
            }
        }
    }
    &-header {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &-sorter {
        display: inline-flex;
        flex-direction: column;
        margin: 0 4px;
        cursor: pointer;
        svg {
            width: 10px;
            height: 10px;
            fill: #ccc;
            &.active {
                fill: #888;
            }
            &:first-child {
                position: relative;
                bottom: -2px;
            }
            &:nth-child(2) {
                position: relative;
                top: -2px;
            }
        }
    }
}
</style>



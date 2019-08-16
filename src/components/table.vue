<template>
    <div class="m-table-wrapper">
        <table class="m-table" :class="{striped: striped === true}">
            <thead>
                <tr>
                    <th><input type="checkbox" @change="onChangeAllItem" ref="allChecked"></th>
                    <th v-for="column in columns" :key="column.field">{{ column.text }}</th>
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
        }
    },
    methods: {
        onChangeItem(item, index, e) {
            let selected = e.target.checked
            let copy = JSON.parse(JSON.stringify(this.selectedItems))
            if(selected) {
                copy.push(item)
            } else {
                copy = copy.filter(i => i.id !== item.id)
                // copy.splice(copy.indexOf(item), 1)
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
}
</style>



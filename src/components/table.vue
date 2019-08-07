<template>
    <div class="m-table-wrapper">
        <table class="m-table" :class="{striped: striped === true}">
            <thead>
                <tr>
                    <th><input type="checkbox" @change="onChangeAllItem(item, index, $event)"></th>
                    <th v-for="column in columns" :key="column.id">{{ column.text }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in dataSource" :key="item.id">
                    <td><input type="checkbox" @change="onChangeItem(item, index, $event)"></td>
                    <template v-for="column in columns">
                        <td :key="column.id">{{ item[column.field] }}</td>
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
            required: true
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
            this.$emit('changeItem', {selected, item, index})
        },
        onChangeAllItem(item, index, e) {
            let selected = e.target.checked
            this.dataSource.map((item, index) => {
                this.$emit('changeItem', {selected, item, index})
            })
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



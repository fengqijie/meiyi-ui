<template>
    <div>
        <m-table
            :columns="columns"
            :data-source="tableData"
            striped
            :selected-items.sync="tableChecked"
            :order-by.sync="orderBy"
        ></m-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                {text: '姓名', field: 'name'},
                {text: '年龄', field: 'age'},
            ],
            tableData: [
                {id: 1, name: '张三', age: 18},
                {id: 2, name: '李四', age: 19},
                {id: 3, name: '王五', age: 17},
                {id: 4, name: '黑豹', age: 20},
            ],
            tableChecked: [],
            orderBy: {
                // true 代表开启排序，但不定升序降序
                // ascend 代表升序
                // descend 代表降序
                age: 'ascend'
            }
        }
    }
}
</script>
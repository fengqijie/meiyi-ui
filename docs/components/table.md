# Table 表格

## 基础表格

<Common-Democode title="" description="">
  <table-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
            <m-table
                :columns="columns"
                :data-source="tableData"
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
                }
            }
        }
    </script>
  </highlight-code>
</Common-Democode>
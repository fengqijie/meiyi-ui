# Input 输入框

## 基本用法

<Common-Democode title="" description="">
  <input-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
            <m-input placeholder="请输入"></m-input>
        </div>
    </template>
  </highlight-code>
</Common-Democode>

## 禁用状态

<Common-Democode title="" description="通过 disabled 属性指定是否禁用 input 组件">
  <input-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
            <m-input placeholder="请输入" disabled v-model="inputValue"></m-input>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    inputValue: ''
                }
            }
        }
    </script>
  </highlight-code>
</Common-Democode>

## 输入错误状态

<Common-Democode title="" description="">
  <input-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
            <m-input placeholder="请输入" error="请输入正确的电话号码"></m-input>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    errorMsg: '请输入正确的电话号码'
                }
            }
        }
    </script>
  </highlight-code>
</Common-Democode>

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| placeholder | 输入框占位文本 | string | - |
| value | 绑定值 | string | - |
| disabled | 是否禁用 | boolean | false |
| readonly | 是否只读 | boolean | false |
| error | 输入错误提示 | string | - |
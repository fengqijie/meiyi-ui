# Button 按钮

## 基本用法

<Common-Democode title="" description="常用的按钮">
  <button-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
            <m-button>默认按钮</m-button>
            <m-button type="primary">Primary</m-button>
            <m-button type="plain">朴素按钮</m-button>
        </div>
    </template>
  </highlight-code>
</Common-Democode>

## 图标按钮

<Common-Democode title="" description="带图标的按钮">
  <button-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
            <m-button icon="search" icon-position="right">查询</m-button>
            <m-button icon="search">查询</m-button>
        </div>
    </template>
  </highlight-code>
</Common-Democode>

## 加载中

<Common-Democode title="" description="点击按钮后进行数据加载操作，在按钮上显示加载状态">
  <button-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
            <m-button type="primary" icon="search" :loading="isLoading" @click="isLoading = !isLoading">搜索中</m-button>
        </div>
    </template>

    <script>
        export default {
            data() {
                return {
                    isLoading: true,
                }
            }
        }
    </script>
  </highlight-code>
</Common-Democode>

## 按钮组

<Common-Democode title="" description="按钮组常与分页组件一起使用">
  <button-demo4 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
          <m-pagination>
              <m-button icon="left">上一页</m-button>
              <m-button icon="right" icon-position="right">下一页</m-button>
          </m-pagination>
        </div>
    </template>
  </highlight-code>
</Common-Democode>

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 可选值 `primary` `plain` | string | default |
| icon | 图标名称 可选图标请参考 icon 图标 | string | - |
| loading | 是否加载中状态 | boolean | false |
| iconPosition | 设置图标按钮中图标的位置 可选值 `left` `right` | string | left |

## 事件

| 事件名 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| click | 点击按钮时的回调 | `function()` |


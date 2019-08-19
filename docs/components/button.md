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
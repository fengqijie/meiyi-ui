# Collapse 折叠面板

## 基础用法

<Common-Democode title="" description="">
  <collapse-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <m-collapse style="margin-bottom: 40px;" :selected.sync="wenzi">
            <m-collapse-item title="标题1" name="1">内容1</m-collapse-item>
            <m-collapse-item title="标题2" name="2">内容2</m-collapse-item>
            <m-collapse-item title="标题3" name="3">内容3</m-collapse-item>
        </m-collapse>
    </template>
    <script>
        export default {
            data() {
                return {
                    wenzi: [],
                }
            }
        }
    </script>
  </highlight-code>
</Common-Democode>

## 手风琴效果

<Common-Democode title="" description="single 控制每次只能展开一个面板">
  <collapse-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <m-collapse style="margin-bottom: 40px;" :selected.sync="wenzi" single>
            <m-collapse-item title="标题1" name="1">内容1</m-collapse-item>
            <m-collapse-item title="标题2" name="2">内容2</m-collapse-item>
            <m-collapse-item title="标题3" name="3">内容3</m-collapse-item>
        </m-collapse>
    </template>
    <script>
        export default {
            data() {
                return {
                    wenzi: [],
                }
            }
        }
    </script>
  </highlight-code>
</Common-Democode>
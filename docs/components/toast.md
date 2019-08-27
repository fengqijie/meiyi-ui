# toast 提示

## 基础用法

<Common-Democode title="" description="">
  <toast-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
            <m-button @click="showToast">点击弹出toast</m-button>
        </div>
    </template>
    <script>
        export default {
            methods: {
                showToast() {
                    this.$toast(`这是一条 toast 提示`)
                }
            }
        }
    </script>
  </highlight-code>
</Common-Democode>

## 指定位置

<Common-Democode title="" description="">
  <toast-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
            <m-button @click="showToast('top')">上方弹出</m-button>
            <m-button @click="showToast('middle')">中间弹出</m-button>
            <m-button @click="showToast('bottom')">下方弹出</m-button>
        </div>
    </template>
    <script>
        export default {
            methods: {
                showToast(location) {
                    this.$toast(`这是一条 toast 提示`, {
                        position: location || 'top',
                    })
                }
            }
        }
    </script>
  </highlight-code>
</Common-Democode>

## 自定义关闭按钮文字和回调函数

<Common-Democode title="" description="">
  <toast-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div>
            <m-button @click="showToast">点击弹出toast</m-button>
        </div>
    </template>
    <script>
        export default {
            methods: {
                showToast() {
                    this.$toast(`这是一条 toast 提示`, {
                        position: 'middle',
                        closeButton: {
                            text: '确定',
                            callback(toast) {
                                console.log(toast)
                            }
                        }
                    })
                }
            }
        }
    </script>
  </highlight-code>
</Common-Democode>
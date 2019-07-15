document.addEventListener('click', (e) => {
    let { target } = e
    callbacks.forEach(item => {
        if (target === item.el || item.el.contains(target)) {
            return
        } else {
            item.callback()
        }
    });
})
let callbacks = []
// 添加vue指令 点击空白地方隐藏
// div v-click-outside="close"></div>
export function clickOutside(el, binding, vnode) {
    callbacks.push({el, callback: binding.value})
}
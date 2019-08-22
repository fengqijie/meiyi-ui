<template>
    <div>
        <m-input placeholder="请输入" :error="errorMsg"></m-input>
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
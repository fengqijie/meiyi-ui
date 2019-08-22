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
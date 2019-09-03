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
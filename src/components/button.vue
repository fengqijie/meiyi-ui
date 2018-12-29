<template>
    <button class="m-button">
        <svg class="m-icon">
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg>
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['icon'],
}
</script>


<style lang="less" scoped>
.m-button {
    outline: none;
    font-size: 14px;
    height: 32px;
    padding: 0 1em;
    border-radius: 4px;
    border: 1px solid #e8e8e8;
    background-color: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.m-icon {
    width: 1em;
    height: 1em;
    margin-right: 0.2em;
}
</style>



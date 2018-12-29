<template>
    <button class="m-button">
        <slot></slot>
    </button>
</template>

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
</style>



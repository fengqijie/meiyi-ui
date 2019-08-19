<template>
    <button class="m-button" :class="{[`icon-${iconPosition}`]: true, [`m-button-${type}`]: true}" @click="$emit('click')">
        <m-icon v-if="loading" class="m-icon loading" name="loading"></m-icon>
        <m-icon v-if="icon && !loading" class="m-icon" :name="icon"></m-icon>
        <div class="button-text">
            <slot></slot>
        </div>
    </button>
</template>

<script>

export default {
    props: {
        type: {
            type: String,
            default: 'default'
        },
        icon: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(val) {
                // 如果用户传的是 top 或其他的
                return val === 'left' || val === 'right'
            }
        }
    },
}
</script>


<style lang="less" scoped>
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
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
    vertical-align: middle;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
    &:active {
        color: #3a8ee6;
        border-color: #3a8ee6;
        outline: none;
    }
    // &:focus {
    //     border-color: #666;
    // }
    > .m-icon {
        order: 1;
        margin: 0;
        margin-right: 0.2em;
    }
    > .button-text {
        order: 2
    }
    &.icon-right {
        > .m-icon {
            order: 2;
            margin: 0;
            margin-left: 0.2em;
        }
        > .button-text {
            order: 1
        }
    }
    .loading {
        animation: spin 1.5s  infinite linear;
    }
    &.m-button-primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }
        &:active {
            background: #3a8ee6;
            border-color: #3a8ee6;
            color: #fff;
        }
    }
    &.m-button-plain {
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff;
        &:hover {
            background: #409eff;
            border-color: #409eff;
            color: #fff;
        }
        &:active {
            background: #3a8ee6;
            border-color: #3a8ee6;
            color: #fff;
            outline: none;
        }
    }
}
</style>



<template>
    <button class="m-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <m-icon v-if="loading" class="m-icon loading" name="loading"></m-icon>
        <m-icon v-if="icon && !loading" class="m-icon" :name="icon"></m-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import mIcon from '@/components/icon'

export default {
    props: {
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
    components:{
        mIcon
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
    &:hover {
        border-color: #ccc;
    }
    &:active {
        border-color: #999;
    }
    // &:focus {
    //     border-color: #666;
    // }
    > .m-icon {
        order: 1;
        margin: 0;
        margin-right: 0.2em;
    }
    > .content {
        order: 2
    }
    &.icon-right {
        > .m-icon {
            order: 2;
            margin: 0;
            margin-left: 0.2em;
        }
        > .content {
            order: 1
        }
    }
    .loading {
        animation: spin 1.5s  infinite linear;
    }
}
</style>



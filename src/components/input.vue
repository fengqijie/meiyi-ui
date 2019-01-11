<template>
    <div class="m-input" :class="{error}">
        <input 
            type="text" 
            :value="value" 
            :disabled="disabled" 
            :readonly="readonly"
            @change="$emit('change', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            />
        <template v-if="error">
            <m-icon name="error"></m-icon>
            <span class="error_text">{{ error }}</span>
        </template>
    </div>
</template>

<script>
import mIcon from '@/components/icon'

export default {
    name: "m-input",
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    },
    components: {
        mIcon,
    }
}
</script>


<style lang="less" scoped>
.m-input {
    margin: 20px 0;
    @height: 32px;
    @border-color: #e8e8e8;
    @border-hover-color: #ccc;
    @border-radius: 4px;
    @font-size: 14px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &.error {
        >input {
            border-color: red;
            margin-right: 5px;
            &:hover {
                border-color: red;
            }
            &:focus {
                box-shadow: inset 0 1px 3px rgba(255,0,0,.5);
            }
        }
        .error_text {
            color: red;
            font-size: @font-size;
            margin-left: 2px;
        }
    }
    >input {
        font-size: @font-size;
        height: @height;
        border: 1px solid @border-color;
        border-radius: @border-radius;
        outline: none;
        padding: 0 8px;
        box-sizing: border-box;
        &:hover {
            border-color: @border-hover-color;
        }
        &:focus {
            box-shadow: inset 0 1px 3px rgba(0,0,0,.5);
        }
        &[disabled], &[readonly] {
            border-color: #e8e8e8;
            color: #ccc;
            cursor: not-allowed;
        }
    }
}
</style>


<template>
    <div class="m-input" :class="{error}">
        <input 
            type="text" 
            :placeholder="placeholder"
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

export default {
    name: "m-input",
    props: {
        placeholder: {
            type: String
        },
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
}
</script>


<style lang="less" scoped>
@import '../assets/css/var.less';
.m-input {
    margin: 20px 0;
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
                border-color: red;
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
            border-color: @blue;
        }
        &[disabled], &[readonly] {
            background-color: #f5f7fa;
            border-color: @border-color;
            color: #c0c4cc;
            cursor: not-allowed;
        }
        &::placeholder {
            color: @placeholder-text-color;
        }
        &::-webkit-input-placeholder {
            /* WebKit browsers 适配谷歌 */
            color: @placeholder-text-color;
        }
        &:-moz-placeholder {
            /* Mozilla Firefox 4 to 18 适配火狐 */
            color: @placeholder-text-color;
        }
        &::-moz-placeholder {
            /* Mozilla Firefox 19+ 适配火狐 */
            color: @placeholder-text-color;
        }
        &:-ms-input-placeholder {
            /* Internet Explorer 10+  适配ie*/
            color: @placeholder-text-color;
        }
    }
}
</style>


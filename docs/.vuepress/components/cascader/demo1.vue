<template>
    <m-cascader :options="cascaderList" :selected.sync="selected"></m-cascader>
</template>

<script>
export default {
    data() {
        return {
            cascaderList: [
                {
                    name: '浙江',
                    code: 1,
                    children: [
                        {
                            name: '杭州',
                            code: 12,
                            children: [
                                { name: '上城区' },
                                { name: '下城区' },
                                { name: '江干区' },
                            ]
                        },
                        { name: '嘉兴', code: 13 },
                        { name: '湖州', code: 14 }
                    ]
                }, {
                    name: '福建',
                    code: 2,
                    children: [
                        { name: '福州', code: 21 },
                        { name: '厦门', code: 22 },
                        { name: '泉州', code: 23 }
                    ]
                },
            ],
            selected: [],
        }
    }
}
</script>
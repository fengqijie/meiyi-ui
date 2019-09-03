const path = require('path')
module.exports = {
    base: '/meiyi/',
    title: 'Meiyi',
    description: 'Meiyi - vue 组件库',
    // head: [
    //     ['link', { rel: 'icon', href: "/logo.png" }],
    // ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'GitHub', link: 'https://github.com/fengqijie/meiyi/' },
            { text: '交流', link: 'https://github.com/fengqijie/meiyi/issues' },
        ],
        sidebar: [
            // {
            //     title: '入门',
            //     collapsable: false,
            //     children: [
            //         '/get-started/',
            //         '/get-started/custom-theme',
            //         '/get-started/z-index-guide',
            //     ]
            // },
            {
                title: 'components 组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/icon',
                    '/components/input',
                    '/components/table',
                    '/components/toast',
                    '/components/carousel',
                ]
            }
        ]
    },
}


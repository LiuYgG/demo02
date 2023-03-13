// 引入mockjs

const Mock = require('mockjs')


Mock.mock('/api/leftmenus', 'get', {
    status: 200,
    message: 'success',
    'menus':[
        {id: 1, parentid: '0', title: '主页', icon: 'el-icon-house', url: '/main'},
        {
            id: 2, 
            parentid: '0', 
            title: '公司管理', 
            icon: 'el-icon-folder-opened',
            children:[
                {
                    id:3, 
                    parentid:'2', 
                    title: '人员管理', 
                    icon:'el-icon-folder-opened',
                    url: '/user'
                },
                {
                    id:4, 
                    parentid:'2', 
                    title: '人员管理', 
                    icon:'el-icon-folder-opened',
                    url: '/user'
                },
            ]
        },
        {id: 5, parentid: '0', title: '行政管理', icon: 'el-icon-user', url: '/'},
        {
            id: 6, 
            parentid: '0', 
            title: '设置', 
            icon: 'el-icon-setting', 
            children:[{
                    id: 7,
                    parentid: '6',
                    title:'站点设置',
                    icon: 'el-icon-setting',
                    url: '/webset'
                },
                {
                    id: 8,
                    parentid: '6',
                    title:'系统设置',
                    icon: 'el-icon-setting',
                    url: '/systemset'
                },
                {
                    id: 9,
                    parentid: '6',
                    title:'其他设置',
                    icon: 'el-icon-setting',
                    url: '/otherset'
                },
            ]
        },

    ]
})
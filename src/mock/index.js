// 引入mockjs

const Mock = require('mockjs')

// 首页 sidebars 接口
Mock.mock('/api/sidebars', 'get', {
    status: 200,
    message: 'success',
    'data|6':[{
        id: '@increment(5)',
        titles: '@cparagraph(1, 3)'
    }]
})

// 首页banner图片接口
Mock.mock('/api/banners', 'get', {
    status: 200,
    message: 'success',
    'data|5': [{
        id: '@increment(5)',
        imgUrl: 'https://api.ixiaowai.cn/gqapi/gqapi.php'
    }]
})

// 创建首页推荐数据展示接口
Mock.mock('/api/news', 'get',{
    status: 200,
    message:'获取成功',
    'data|9':[{
        id: '@increment(100)',
        title:'@cword(2,10)',
        desc:'@cparagraph(3,7)',
        author:'@cname',
        time: '@date("yyyy / MM / dd")'
    }]
})

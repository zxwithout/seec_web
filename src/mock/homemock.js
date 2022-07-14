let Mock = require('mockjs')
// /aa 拦截
let arr = ['zhangsan','lisi','wangwu','diudiu']
// Mock.mock('/api/aa', 'get', (options)=>{
//     console.log('mock--get',options); // {url:'/api/aa',type:'get',body:null}
//     return arr
// })

// 正则 '/api/aa'
Mock.mock(/\/api\/aa/, 'get', (options)=>{
    console.log('正则',options); // {url:'/api/aa',type:'get',body:null}
    return arr
})

Mock.mock('/api/ab', 'post', (options)=>{
    console.log('mock--post',options); // {url:'/api/ab', type:'POST', body:'{"name":"zz"}'}
    return {   
        status:200,
        message:'success',
        data:arr
    }
})
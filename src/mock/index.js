import Mock from 'mockjs' // 引入mockjs
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据
 

Mock.mock('/api/admin/getinfo', 'post', {
  data: {
    "username": "本人",
    "id": "114514",
    "msg": "香槟,可算给注册到了",
    Article: {
      'list|1-10': [{
        'id|+1': 1,
        'title':'<strong>'+'测试标题'+'</strong>',
        'content|1-100':"@ctitle"
      }]


    },
    QuestionBox:{

    }

  }
})


export default Mock
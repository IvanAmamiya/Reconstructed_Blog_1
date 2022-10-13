import Mock from 'mockjs' // 引入mockjs
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

Mock.mock('/api/admin/getArticle', 'post', {
  data: {
    Article: {
      'list': [

        {
          'id': 0,

        'title': '<strong>' + '测试标题' + '</strong>',
        'content': "测试内容"
      },
      {
        'id': 1,

      'title': '<strong>' + '测试标题1' + '</strong>',
      'content': "测试内容1"
    },
    ]
    }
  }
})
Mock.mock('/api/admin/getArticleDetail', 'post', {
  data: {
    Article: {
      'list': [

        {
          'id': 0,

        'title': '<strong>' + '测试标题' + '</strong>',
        'content': "测试内容"
      },
      {
        'id': 1,

      'title': '<strong>' + '测试标题1' + '</strong>',
      'content': "测试内容1"
    },
    ]
    },
    Review:{
      'ReviewList':[
        [
          {
            "num":0,
            "content":"测试内容"

          },
          {
            "num":1,
            "content":"测试内容1"
          }

        ],
        [
          {
            "num":0,
            content:"Test0"
          },{
            "num":1,
            content:"Test1"
          }
        ]
      ]
    }
  }
})
Mock.mock('/api/admin/getTest','post',{
  data:{
    'test':'axios测试用'
  }
})
Mock.mock('/api/admin/getQuestion', 'post', {
  data: {
    Question: {
      'Questionlist': [

        {
          'id': 0,

        'title': '<strong>' + '测试问题' + '</strong>',
        'content': "测试内容1"
      },
      {
        'id': 1,

      'title': '<strong>' + '测试问题1' + '</strong>',
      'content': "测试内容1"
    },
 
    
    ]


    }
  }
})

Mock.mock('/api/admin/getinfo', 'post', {
  data: {
    "username": "本人",
    "id": "114514",
    "msg": "香槟,可算给注册到了",
    Article: {
      'list|1-10': [{
        'id|+1': 1,
        'title': '<strong>' + '测试标题' + '</strong>',
        'content|1-100': "@ctitle"
      }]


    },
    QuestionBox: {
      'list|1-5': [{
        'id|+1': 1,
        'title': '<strong>' + '测试标题' + '</strong>',
        'content|1-10': "@ctitle"
      }]

    }

  }
})


export default Mock
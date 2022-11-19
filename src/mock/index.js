import Mock from 'mockjs' // 引入mockjs
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据
function review(num,author,body){
  this.num = num;
  this.Author = author;
  this.body = body;
}
function detailForm(id,type,title,content,Author,reviews) {
  this.id = id;
  this.type = type;
  this.title = title;
  this.content = content;
  this.Author = Author;
  this.reviews = reviews;
}
const Details = [];
for(let i = 0;i<10;i++)
{
  let owntype = 'Article';
  let ownauthor = 'Admin'
  if(i%2==0)
  {
    owntype = 'Question';
    ownauthor = 'Questioner'
  }  
  let reviews = [];
  for(let j = 0;j<3;j++)
  {
    let comment = new review(j,'AuthorTest'+j+i,'ContentTest No.'+j+i);
    reviews.push(comment);
  }
  let Detail = new detailForm(i,owntype,owntype+'test'+i,'testcontent'+i,ownauthor+i,reviews);
  Details.push(Detail);
}
const Articles = Details.filter((detail)=>{return detail.type==='Article'});
Mock.mock('/api/admin/getArticle', 'post', ()=>{
  
  const thisPageArticles = Articles.slice(0,10);
  return {
    data: {
      thisPageArticles,
    }
  }
})
Mock.mock('/api/admin/getArticleDetail', 'post', {
  data: {
    Articles
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
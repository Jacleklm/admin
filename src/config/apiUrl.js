let ipUrl = 'http://localhost:7002/admin/' 

let servicePath = {
  index:ipUrl + 'index' ,                   //  其实是一个测试
  checkLogin:ipUrl + 'checkLogin' ,         //  检查用户名密码是否正确
  getTypeInfo:ipUrl + 'getTypeInfo',        //  获得文章类别信息
  addArticle:ipUrl + 'addArticle',          //  添加文章
  updateArticle:ipUrl + 'updateArticle',    //  修改文章
  getArticleList:ipUrl + 'getArticleList',  //  获取文章列表
  delArticle:ipUrl + 'delArticle/',         //  获取文章列表
  getArticleById:ipUrl + 'getArticleById/', //  获取文章列表
}

export default servicePath;

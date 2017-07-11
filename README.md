# node-spider
从零开始搭建node爬虫

运行 supervisor --harmony index，文件改动后自动重启程序


#### 项目构成

<pre>
├── config  // 存放环境配置的文件
├── models  // 存放操作数据库的文件
├── public  // 存放静态文件，如样式，图片等
├── routes  // 存放路由文件
├── views   // 存放模板文件
├── index.js  //  程序主文件 
├── package.json  // 存储项目名，描述，作者，依赖等等信息

</pre>


对应模块的用处：

1. `express`: web 框架
2. `express-session`: session 中间件
3. `connect-mongo`: 将 session 存储于 mongodb，结合 express-session 使用
4. `connect-flash`: 页面通知提示的中间件，基于 session 实现
5. `ejs`: 模板
6. `express-formidable`: 接收表单及文件的上传中间件
7. `config-lite`: 读取配置文件
8. `marked`: markdown 解析
9. `moment`: 时间格式化
10. `mongolass`: mongodb 驱动
11. `objectid-to-timestamp`: 根据 ObjectId 生成时间戳
12. `sha1`: sha1 加密，用于密码加密
13. `winston`: 日志
14. `express-winston`: 基于 winston 的用于 express 的日志中间件


功能设计如下：v1.0

1. 注册
     注册（包含上传头像）：`POST /api/signup`
2. 登录
     登录：`POST /api/signin`
3. 登出：`GET /api/signout`
4. 站点管理
    1. 新增站点: `POST /api/sites`
    2. 查看站点列表：`GET /api/sites`
    3. 查看单个站点详情：`GET /api/sites/:siteId`
    4. 修改站点信息：`POST /api/sites/:siteId/edit`
    5. 删除站点信息：`POST /api/sites/:siteId/remove`
5. 爬取内容管理
    1. 获取站点列表: `GET /api/sites`
    2. 开启爬取：`POST /api/spider/:siteId/start`
    3. 停止爬取：`POST /api/spider/:siteId/pause`
    4. 统计爬取信息：`GET /api/statistics/:siteId`
    5. 查看单条爬取信息内容：`GET /api/statistics/:siteId`



#### Mongoose 模型提供了 find, findOne, 和 findById 方法用于文档查询。
> Model.find
Model.find(query, fields, options, callback)// fields 和 options 都是可选参数
Model.find({'csser.com':5},function(err, docs){// docs 是查询的结果数组 });
> Model.findOne
与 Model.find 相同，但只返回单个文档
Model.findOne({ age:5},function(err, doc){// doc 是单个文档});
> Model.findById
与 findOne 相同，但它接收文档的 _id 作为参数，返回单个文档。_id 可以是字符串或 ObjectId 对象。
Model.findById(obj._id,function(err, doc){// doc 是单个文档});
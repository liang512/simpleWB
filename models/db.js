// 引包
var mongoose = require('mongoose');
// 创建连接
var db = mongoose.createConnection("mongodb://127.0.0.1/weibo",{useNewUrlParser:true});

db.once('open',function () {
    console.log("数据库连接成功");
});
module.exports = db;
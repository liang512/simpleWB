var mongoose = require("mongoose");
var db = require("./db.js");

var userSchema = new mongoose.Schema({
    username: {type: String,},//用户名
    password: {type: String},//密码
    date: {type: String},//注册时间
    avatar: {type: String, default: 'default.jpg'},//头像
    nickname: {type: String},//昵称
    name: {type: String, default: '未填写'},//姓名
    sex: {type: String, default: '未填写'},//性别
    address: {type: String, default: '未填写'},//所在地
    birthday: {type: String, default: '未填写'},//生日
    sign: {type: String, default: '未填写'},//个性签名
    mail: {type: String},//邮箱
    qq: {type: String, default: '未填写'},//qq
    school: {type: String, default: '未填写'},//学校
    label: {type: String, default: '未填写'}, //标签
    focus: {type: Array, default: []},//关注
    fans: {type: Array, default: []},//粉丝
    shuoshuo_collection: {type: Array, default: []}
});

var User = db.model("User", userSchema);

module.exports = User;
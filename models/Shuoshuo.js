var mongoose = require("mongoose");
var db = require("./db.js");

var shuoshuoSchema = new mongoose.Schema({
    content: {type: String},
    author: {type: String},
    nickname: {type: String},
    time: {type: String},
    like_num: {type: Number, default: 0},
    relay_num: {type: Number, default: 0},
    avatar: {type: String}
});

var Shuoshuo = db.model("Shuoshuo", shuoshuoSchema);

module.exports = Shuoshuo;
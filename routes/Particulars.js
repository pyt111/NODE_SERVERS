var express = require('express');
var router = express.Router();
// import homeJson from '../json/home3.json'
// var MongoClient = require('mongodb').MongoClient;//需要启动mongodb服务
var url = "mongodb://192.168.1.24:10008/pyt111";
 
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log('数据库已创建');
//     db.collection('site').insertMany(homeJson,function(err,res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     })
// });
/* GET home page. */
router.post('/', function (req, res, next) {
    let data = {
        code: 0,
        errno: 100,
        data: {
            type: 0,
            money: 1550,
            percent:113,
            productTime:4
        }
    }
    res.json(data)
    // res.render('index', { title: 'Express' });
});
router.post('/user/money', (req, res, next) => {
    let data = {
        code: 0,
        errno: 100,
        data: {
            money: 1520,
        }
    }
    res.json(data)
})
module.exports = router;

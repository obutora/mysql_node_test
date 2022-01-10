// expressオブジェクトの作成
const express = require('express')
const mysql = require('mysql')
// Expressのアプリケーション本体となるオブジェクトの作成
const app = express()

// CORS許可
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
});


// ルーティングの設定
app.get('/', (req, res) => {
    let data = 'empty'

    const pool = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'password',
        port: 3333,
        database: 'dbname'
    });

    pool.query('select * from users;', (err, results, fields) => {
        if (err) {
            console.error("user.js: sql execute error");
        } else {
            console.log("user.js: sql execute success");
        }
        console.log(results)
        pool.end();
        res.send(results);
    });
})

app.get('/single', (req, res) => {
    let data = 'empty'

    const pool = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'password',
        port: 3333,
        database: 'dbname'
    });

    pool.query('select * from users where storeName = "storeB";', (err, results, fields) => {
        if (err) {
            console.error("user.js: sql execute error");
        } else {
            console.log("user.js: sql execute success");
        }
        console.log(results)
        pool.end();
        res.send(results);
    });
})

// 待ち受けの開始
app.listen(3000, () => {
    console.log('Start server port:3000')
})
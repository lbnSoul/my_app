var express = require('express');
var router = express.Router();
const connection = require('../db/connect');
const fs = require("fs");
const path = require("path");

/* GET users listing. */
router.post('/addLongText', (req, res) => {
    if (!req.cookies.uid) {
        res.json({
            code: 500,
            msg: '未登陆',
            data: ''
        })
    }
    const {title, content, isOpen, type, password} = req.body
    let sql = "INSERT INTO long_text(title, content, is_open, uid, type, password) VALUES(?,?,?,?,?,?)"
    let sqlParams = [title, content, isOpen, req.cookies.uid, type, password]
    connection.query(sql, sqlParams, (err, result) => {
        if (err) {
            res.json({
                code: 500,
                msg: err,
                data: ''
            })
        } else {
            res.json({
                code: 200,
                msg: '添加成功',
                data: ''
            })
        }
    })
})

router.post('/addAlats', (req, res) => {
    if (!req.cookies.uid) {
        res.json({
            code: 500,
            msg: '未登陆',
            data: ''
        })
    }
    const {title, content, isOpen, password, imgs, type} = req.body
    let sql = ''
    let sqlParams = null
    if (isOpen === '1') {
         sql = "INSERT INTO alats(title, content, is_open, uid, type, img_arr, create_user) VALUES(?,?,?,?,?,?,?)"
         sqlParams = [title, content, isOpen, req.cookies.uid, type, imgs.join('+'), req.cookies.username]
    } else {
        sql = "INSERT INTO alats(title, content, is_open, uid, type, img_arr, password,create_user) VALUES(?,?,?,?,?,?,?,?)"
        sqlParams = [title, content, isOpen, req.cookies.uid, type, imgs, password, req.cookies.username]
    }
    connection.query(sql, sqlParams, (err, result) => {
        if (err) {
            res.json({
                code: 500,
                msg: err,
                data: ''
            })
        } else {
            res.json({
                code: 200,
                msg: '添加成功',
                data: ''
            })
        }
    })
})

router.post('/upload', (req, res) => {
    let url = []
    req.files.forEach(item => {
        const extname = path.extname(item.originalname);
        fs.renameSync(item.path, item.destination + item.filename + extname)
        url.push(`http://${req.headers.host}/${item.destination + item.filename + extname}`)
    })
    res.json({
        code: 200,
        msg: '上传成功',
        imageUrl: url
    })
})
module.exports = router;

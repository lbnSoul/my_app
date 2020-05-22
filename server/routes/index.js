const express = require('express');
const router = express.Router();
const connection = require('../db/connect');

/* GET home page. */
router.post('/login', function(req, res) {
  const {phone, password} = req.body
  const sql = "SELECT * FROM user WHERE phone=?"
  const sqlParam = [phone]
  connection.query(sql, sqlParam, (err, result) => {
    if (err) {
      res.json({
        code: 500,
        msg: err,
        data: ''
      });
      return
    }
    if (result.length === 0) {
      res.json({
        code: 0,
        msg: '用户名不存在',
        data: ''
      });
      return
    }
    if (password === result[0].password) {
      res.cookie('username', result[0].user_name);
      res.cookie('uid', result[0].user_id);

      res.json({
        code: 200,
        msg: 'success',
        data: ''
      });
    } else {
      res.json({
        code: 0,
        msg: '密码错误',
        data: ''
      });
    }
  })
});

router.post('/register', (req, res) => {
  const {phone, password, nickName} = req.body
  let sql = "SELECT * FROM user WHERE phone = ?"
  let sqlParams = [phone]
  connection.query(sql, sqlParams, (err, result) => {
    if (err) {
      res.json({
        code: 500,
        msg: err,
        data: ''
      });
      return
    } else {
      if (result.length > 0) {
        res.json({
          code: 0,
          msg: '已存在此用户',
          data: ''
        })
      } else {
        let sql = "INSERT INTO user(user_name, password, phone) VALUES(?,?,?)"
        let sqlParams = [nickName, password, phone]
        connection.query(sql, sqlParams, (err) => {
          if (err) {
            res.json({
              code: 500,
              msg: err,
              data: ''
            });
            return
          } else {
            res.json({
              code: 200,
              msg: '注册成功',
              data: ''
            });
          }
        })
      }
    }
  })
})

router.post('/getList', (req, res) => {
  if (!req.cookies.uid) {
    res.json({
      code: 500,
      msg: '未登陆',
      data: ''
    })
  }
  let sql = "SELECT title,is_open,article_id,create_time,type FROM (SELECT title,is_open,article_id,create_time,type FROM alats UNION SELECT title,is_open,article_id,create_time,type FROM long_text) AS list ORDER BY create_time desc"
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({
        code: 500,
        msg: err,
        data: ''
      });
      return
    } else {
      res.json({
        code: 200,
        msg: 'success',
        data: result
      });
    }
  })
})

router.post('/unlock', (req, res) => {
  if (!req.cookies.uid) {
    res.json({
      code: 500,
      msg: '未登陆',
      data: ''
    })
  }
  let {id, password, type} = req.body
  let sql = "select article_id,password,type from (select article_id,password,type from long_text union select article_id,password,type from alats) as c where article_id=? AND type=?"
  let sqlParams = [id, type]
  connection.query(sql, sqlParams, (err, result) => {
    if (err) {
      res.json({
        code: 500,
        msg: err,
        data: ''
      });
      return
    } else {
      if (result.length > 0 && result[0].password === password) {
        res.json({
          code: 200,
          msg: 'success',
          data: ''
        });
      } else {
        res.json({
          code: 0,
          msg: '密码错误',
          data: ''
        });
      }
    }
  })
})

router.post('/articleDetail', (req, res) => {
  if (!req.cookies.uid) {
    res.json({
      code: 500,
      msg: '未登陆',
      data: ''
    })
  }
  let {id, type} = req.body
  let sql = ''
  if (+type === 1) {
    sql = 'select article_id,content,title,create_user,create_time from long_text where article_id=?'
  } else {
    sql = 'select article_id,content,title,create_user,create_time,img_arr from alats where article_id=?'
  }
  let sqlParams = [+id]
  connection.query(sql, sqlParams, (err, result) => {
    if (err) {
      res.json({
        code: 500,
        msg: err,
        data: ''
      });
      return
    } else {
      if (result.length > 0) {
        res.json({
          code: 200,
          msg: 'success',
          data: result[0]
        });
      } else {
        res.json({
          code: 0,
          msg: '未查找到此记录',
          data: ''
        });
      }
    }
  })
})

router.post('/delArticleById', (req, res) => {
  if (!req.cookies.uid) {
    res.json({
      code: 500,
      msg: '未登陆',
      data: ''
    })
  }
  let {id, type} = req.body
  let sql = ''
  if (+type === 1) {
    sql = 'delete from long_text where article_id=?'
  } else {
    sql = 'delete from alats where article_id=?'
  }
  let sqlParams = [+id]
  connection.query(sql, sqlParams, (err, result) => {
    if (err) {
      res.json({
        code: 500,
        msg: err,
        data: ''
      });
      return
    } else {
      if (result.length > 0) {
        res.json({
          code: 200,
          msg: 'success',
          data: '删除成功'
        });
      } else {
        res.json({
          code: 0,
          msg: '未查找到此记录',
          data: ''
        });
      }
    }
  })
})


module.exports = router;

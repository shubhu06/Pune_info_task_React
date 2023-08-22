const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = 8080;

const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pune_info_db'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to Db")
    }
});

// get all user
app.get('/get_all_user', (req, res) => {
  
    const query = 'SELECT* FROM user ';
    connection.query(query,(err, result) => {
        if (err) {
            res.status(500).send({
                success: false,
                msg: err.sqlMessage,
                data: []
            })
        } else {
            res.status(200).send({
                success: true,
                msg: 'query completed successfully',
                data: result
            })
        }
    })
});

// Login Api

app.post('/login', (req, resp) => {
    const { username, password } = req.body;
    let query = 'SELECT * FROM user where username = ?  AND password = ?'

    connection.query(query, [username, password], (err, result) => {
        if (err) {
            resp.status(500).send({
                success: false,
                msg: err.sqlMessage,
                data: []
            });
        } else {
            if (!result.length) {
                resp.status(401).send({
                    success: false,
                    msg: "invalid user_id or password",
                    data: []
                });

            } else {
                resp.status(200).send({
                    success: true,
                    msg: 'Login Succefully',
                    data: result
                });
            }
        }
    })

})

// get all Food
app.get('/get_all_food', (req, res) => {
  
    const query = 'SELECT* FROM food ';
    connection.query(query,(err, result) => {
        if (err) {
            res.status(500).send({
                success: false,
                msg: err.sqlMessage,
                data: []
            })
        } else {
            res.status(200).send({
                success: true,
                msg: 'query completed successfully',
                data: result
            })
        }
    })
});


// get all places
app.get('/get_all_places', (req, res) => {
  
    const query = 'SELECT* FROM places ';
    connection.query(query,(err, result) => {
        if (err) {
            res.status(500).send({
                success: false,
                msg: err.sqlMessage,
                data: []
            })
        } else {
            res.status(200).send({
                success: true,
                msg: 'query completed successfully',
                data: result
            })
        }
    })
});

app.listen(port, () => {
    console.log("server Started On " + port)
})

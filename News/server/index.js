const express = require('express');
const db = require("./config/db");
const app = express();
const cors = require('cors');
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM posts", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    }
    );
});

app.get("/api/getFromID/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM posts WHERE ID = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    }
    );
});

app.post("/api/create", (req, res) => {
    const title = req.body.title;
    const text = req.body.text;
    db.query("INSERT INTO posts (Title, Text) VALUES (?,?)", [title, text], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    }
    );
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const userpass = req.body.userpass
    db.query("SELECT * FROM users WHERE UserName = ? AND UserPass = ?",[username, userpass] , (err, result)=>{
        if (err){
            res.send({err: err})
        }
        if (result.lenght > 0){
            res.send(result)
        }
        else {
            res.send({message: "Tài khoản hoặc mật khẩu không hợp lệ"})
        }
    }
    );

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
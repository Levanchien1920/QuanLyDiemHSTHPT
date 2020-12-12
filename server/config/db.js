const mysql = require("mysql")

const db = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    user: "b0d3793ff8e905",
    password: "6a88e322",
    database: "heroku_1758d0b391b5e7e",
})

module.exports = db
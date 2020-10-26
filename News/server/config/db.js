const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "blogpost",
})

module.exports = db
const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "quanlydiemhocsinhthpt",
})

module.exports = db
const express = require('express');
const db = require("./config/db");
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { response } = require('express');
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/get", (req, res) => {
    db.query("SELECT * FROM thongbao", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    }
    );
});

app.get("/getFromID/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM thongbao WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    }
    );
});

app.post("/create", (req, res) => {
    const title = req.body.title;
    const text = req.body.text;
    db.query("INSERT INTO thongbao (tieude, noidung) VALUES (?,?)", [title, text], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    }
    );
})

const verifyJWTAdmin = (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) {
        res.send("token missing!!!")
    }
    else {
        jwt.verify(token, "jwtAdmin", (err, decode) => {
            if (err) {
                res.json({ auth: false, message: "false" })
            }
            else {
                req.ma = decode.MaAdmin
                next()
            }
        })
    }
}

app.get("/auth/admin", verifyJWTAdmin, (req, res) => {
    res.send("OK")
})

app.post('/login/admin', (req, res) => {
    const username = req.body.username
    const userpass = req.body.userpass

    db.query("SELECT MaAdmin FROM admin WHERE Username = ? AND Password = ?", [username, userpass], (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        if (result.length > 0) {
            const id = result[0].ID
            const token = jwt.sign({ id }, "jwtAdmin", {
                expiresIn: 3600
            })
            res.json({ auth: true, token: token, result: result })
        }
        else {
            res.json({ auth: false, message: "Tài khoản hoặc mật khẩu không hợp lệ" })
        }
    }
    );
})

app.put("/admin", (req, res) => {
    db.query("SELECT * FROM admin WHERE MaAdmin = ?", req.body.id, (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        res.send(result)
    })
})

const verifyJWTGV = (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) {
        res.send("token missing!!!")
    }
    else {
        jwt.verify(token, "jwtGV", (err, decode) => {
            if (err) {
                res.json({ auth: false, message: "false" })
            }
            else {
                req.ma = decode.MaGV
                next()
            }
        })
    }
}

app.get("/auth/GV", verifyJWTGV, (req, res) => {
    res.send("OK")
})

app.post('/login/GV', (req, res) => {
    const username = req.body.username
    const userpass = req.body.userpass

    db.query("SELECT MaGV FROM giaovien WHERE Username = ? AND Password = ?", [username, userpass], (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        if (result.length > 0) {
            const id = result[0].MaGV
            const token = jwt.sign({ id }, "jwtGV", {
                expiresIn: 3600
            })
            res.json({ auth: true, token: token, result: result })
        }
        else {
            res.json({ auth: false, message: "Tài khoản hoặc mật khẩu không hợp lệ" })
        }
    }
    );
})

app.post('/luudiemGK', (req, res) => {
    const diemHS = req.body.diemHS;
    const vitri = req.body.vitri;
    const malop = req.body.malop;
    const idgv = req.body.id;
    console.log("mallll:" + malop);


    for (let index = 0; index < diemHS.length; index++) {
        const element1 = diemHS[index];
        console.log(element1)
        const element2 = vitri[index];
        console.log(element2)
        db.query("UPDATE diemthi SET DiemGK = ? WHERE MaHS =  ? ", [element1, element2], (err, result) => {
            console.log(result.affectedRows + " row upd");
        })
    }

    db.query("SELECT * FROM diemthi where MaLH= ?", malop, (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        res.send(result)
        console.log(result)
    })

})
app.post('/luudiemCK', (req, res) => {
    const diemHS = req.body.diemHS;
    const vitri = req.body.vitri;
    const malop = req.body.malop;
    const idgv = req.body.id;
    console.log("mallll:" + malop);


    for (let index = 0; index < diemHS.length; index++) {
        const element1 = diemHS[index];
        console.log(element1)
        const element2 = vitri[index];
        console.log(element2)
        db.query("UPDATE diemthi SET DiemCK = ? WHERE MaHS =  ? ", [element1, element2], (err, result) => {
            console.log(result.affectedRows + " row upd");
        })
    }

    db.query("SELECT * FROM diemthi where MaLH= ?", malop, (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        res.send(result)
        console.log(result)
    })

})

app.put("/GV", (req, res) => {
    console.log("magv:" + req.body.id);
    db.query("SELECT * FROM tkb WHERE MaGV = ?", req.body.id, (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        res.send(result)
    })
})


app.get("/LopFromMa/:lopID", (req, res) => {
    const lopID = req.params.lopID
    db.query("SELECT * FROM hocsinh WHERE MaLH = ?", lopID, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    }
    );
});

const verifyJWTHS = (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) {
        res.send("token missing!!!")
    }
    else {
        jwt.verify(token, "jwtHS", (err, decode) => {
            if (err) {
                res.json({ auth: false, message: "false" })
            }
            else {
                req.ma = decode.MaHS
                next()
            }
        })
    }
}

app.put("/getLop", (req, res) => {
    const idgv = req.body.MaGV
    db.query("SELECT * FROM lop WHERE MaGV = ?", idgv, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    }
    );
});

app.get("/LopFromMa/:ma", (req, res) => {
    const id = req.params.ma
    db.query("SELECT * FROM hocsinh WHERE MaLH = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    }
    );
});

app.get("/auth/HS", verifyJWTHS, (req, res) => {
    res.send("OK")
})

app.post('/login/HS', (req, res) => {
    const username = req.body.username
    const userpass = req.body.userpass

    db.query("SELECT MaHS FROM hocsinh WHERE Username = ? AND Password = ?", [username, userpass], (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        if (result.length > 0) {
            const id = result[0].MaHS
            const token = jwt.sign({ id }, "jwtHS", {
                expiresIn: 3600
            })
            res.json({ auth: true, token: token, result: result })
        }
        else {
            res.json({ auth: false, message: "Tài khoản hoặc mật khẩu không hợp lệ" })
        }
    }
    );
})

app.put("/HS", (req, res) => {
    db.query("SELECT * FROM hocsinh WHERE MaHS = ?", req.body.id, (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        res.send(result)
    })
})
app.get("/MonFromMa/:mon", (req, res) => {
    const maMH = req.params.maMH
    db.query("SELECT * FROM monhoc WHERE 1 ", maMH, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    }
    );
});
app.put("/xemdiem", (req, res) => {
    const maHS = req.body.MaHS
    db.query("SELECT * FROM diemthi WHERE MaHS = ?", maHS, (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        res.send(result)
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
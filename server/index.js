const express = require('express');
const db = require("./config/db");
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
var PORT = 3001;

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
    }
    );
})
app.post("/createFeedback", (req, res) => {
    const subject = req.body.subject;
    const text = req.body.text;
    const maHS= req.body.maHS;
    db.query("INSERT INTO phanhoi (monhoc, noidung,MaHS) VALUES (?,?,?)", [subject, text, maHS], (err, result) => {
        if (err) {
            console.log(err);
        }
    }
    );
})
app.put("/getFeedback", (req, res) => {
    const MaGV = req.body.MaGV
    const MaMH = req.body.MaMH
    db.query("SELECT hocsinh.MaHS, hocsinh.Hoten, lop.TenLop, phanhoi.noidung FROM ((lop INNER JOIN hocsinh ON lop.MaLH = hocsinh.MaLH)  INNER JOIN phanhoi ON phanhoi.MaHS = hocsinh.MaHS) WHERE (lop.MaGV = ? AND phanhoi.monhoc = ?)", [MaGV, MaMH], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    }
    );
});

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
    for (let index = 0; index < diemHS.length; index++) {
        const element1 = diemHS[index];
        const element2 = vitri[index];
        db.query("UPDATE diemthi SET DiemGK = ? WHERE MaHS =  ? AND MaGV = ?", [element1, element2, idgv], (err, result) => {
        })
    }
        db.query("SELECT * FROM diemthi where MaGV= ? AND MaLH = ?",[idgv , malop] , (err, result) => { 
            if (err) {
                res.send({ err: err })
            }
            res.send(result)
        })
})
app.post('/luudiemCK', (req, res) => {
    const diemHS = req.body.diemHS;
    const vitri = req.body.vitri;
    const malop = req.body.malop;
    const idgv = req.body.id;
    for (let index = 0; index < diemHS.length; index++) {
        const element1 = diemHS[index];
        const element2 = vitri[index];
        db.query("UPDATE diemthi SET DiemCK = ? WHERE MaHS =  ? AND MaGV = ?", [element1, element2, idgv], (err, result) => {
        })
    }

    db.query("SELECT * FROM diemthi where MaGV= ? AND MaLH = ?",[idgv , malop] , (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        res.send(result)
    })
})

app.put("/GV", (req, res) => {
    db.query("SELECT * FROM giaovien WHERE MaGV = ?", req.body.id, (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        res.send(result)
    })
})

app.put("/tkbGV", (req, res) => {
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
    // db.query("SELECT diemthi.DiemGK, diemthi.DiemCK, monhoc.TenMH FROM ((diemthi INNER JOIN giaovien ON diemthi.MaGV = giaovien.MaGV) INNER JOIN monhoc ON monhoc.MaMH = giaovien.MaMH) WHERE diemthi.MaHS = ?"
    db.query("SELECT * FROM hocsinh FROM (diemthi INNER JOIN hocsinh on diemthi.MaHS = hocsinh.MaHS) WHERE diemthi.MaLH = ?", id, (err, result) => {
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
    const ma = req.params.mon
    db.query("SELECT diemthi.DiemGK, diemthi.DiemCK, monhoc.TenMH FROM ((diemthi INNER JOIN giaovien ON diemthi.MaGV = giaovien.MaGV) INNER JOIN monhoc ON monhoc.MaMH = giaovien.MaMH) WHERE diemthi.MaHS = ?", ma, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    }
    );
});

app.post("/khoagk", (req, res) => {
    const khoa = req.body.khoa
    db.query("UPDATE han SET gk = ?", [khoa], (err, result) => {
    })
});

app.post("/khoack", (req, res) => {
    const khoa = req.body.khoa
    db.query("UPDATE han SET ck = ?", [khoa], (err, result) => {
    })
});

app.get("/layhan", (req, res) => {
    db.query("SELECT * FROM han", (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        res.send(result)
    })
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
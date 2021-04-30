import express from "express";
import db from "./src/database/Connection";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.get("/api/admin", function (req, res) {
    db.query("SELECT * FROM `personal_site`.`admin_login`", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.get("/api/portfolio", function (req, res) {
    db.query("SELECT * FROM `personal_site`.`portfolio_input`", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.get("/api/resume", function (req, res) {
    db.query("SELECT * FROM `personal_site`.`resume_input`", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.get("/api/user", function (req, res) {
    db.query("SELECT * FROM `personal_site`.`user_input`", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})




app.listen(3001, () => 
console.log(`Server ready on http://localhost:3001`)
);


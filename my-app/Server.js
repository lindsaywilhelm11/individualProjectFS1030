import express from "express";
import db from "./src/database/Connection";
import cors from "cors";
import * as jwt from 'jsonwebtoken'
import argon2 from 'argon2';


const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  }));

app.use(express.json());

app.get("/api", (req, res) => {
    res.send("hello world");
});

app.get("/api/personal_site", (req, res) => {
    db.query("USE personal_site", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.get("/api/admin", (req, res) => {
    try{
        const {username, password, adminID} = req.body

        if (!username || !password){
            return res.status(401).json({message: "Incorrect credentials!"})
        }

        db.query('SELECT * FROM admin_login WHERE username = ?', [username], async function(error, results, fields) {
            if (error) throw error
            if(!results || !(await argon2.verify(results[0].password, password))){
                return res.status(401).json({message: "Incorrect credentials!"})
            } else {
                const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn: '5m'})
                console.log("Logged in as: " + username);
                if(adminID){
                    console.log(username + " is also an admin");
                }
                return res.send({token});          
            }
        });
    } catch(err){
        console.log(err)
    }
})


app.get("/api/portfolio", (req, res) => {
    db.query("SELECT * FROM portfolio_input", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.post("/api/portfolio", (req, res) => {
    db.query("INSERT INTO portfolio_input (title, image, description) VALUES (?, ?, ?)", [req.body.title, req.body.image, req.body.description], function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.get("/api/portfolio/:portfolioID", (req, res) => {
    db.query(`SELECT * FROM portfolio_input WHERE portfolioID=${req.params.portfolioID}`, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.delete("/api/portfolio/:portfolioID", (req, res) => {
    db.query(`DELETE FROM portfolio_input WHERE portfolioID=${req.params.portfolioID}`, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.put("/api/portfolio/:portfolioID", (req, res) => {
    const { title, image, description } = req.body;
    db.query(`UPDATE portfolio_input SET title="${title}", image="${image}", description="${description}" WHERE portfolioID=${req.params.portfolioID}`, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.get("/api/resume", (req, res) => {
    db.query("SELECT * FROM resume_input", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.post("/api/resume", (req, res) => {
    db.query("INSERT INTO resume_input (company, position, location, start_date, end_date, description, type) VALUES (?, ?, ?, ?, ?, ?, ?)", [req.body.company, req.body.position, req.body.location, req.body.start_date, req.body.end_date, req.body.description, req.body.type], function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.get("/api/resume/:resumeID", (req, res) => {
    db.query(`SELECT * FROM resume_input WHERE resumeID=${req.params.resumeID}`, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.put("/api/resume/:resumeID", (req, res) => {
    const { company, position, location, start_date, end_date, description, type } = req.body;
    db.query(`UPDATE resume_input SET company="${company}", position="${position}", location="${location}", start_date="${start_date}", end_date="${end_date}", description="${description}", type="${type}" WHERE resumeID=${req.params.resumeID}`, function (error, results, fields) {
        console.log(req.body);
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.delete("/api/resume/:resumeID", (req, res) => {
    db.query(`DELETE FROM resume_input WHERE resumeID=${req.params.resumeID}`, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

app.get("/api/user", (req, res) => {
    db.query("SELECT * FROM user_input", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

const PORT = 3001;
app.listen(PORT, () => console.log(`Server ready on port 3001...`));




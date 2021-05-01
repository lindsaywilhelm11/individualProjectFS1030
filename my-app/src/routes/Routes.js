import express from 'express';
import db from '../database/connection';

const router = express.Router();

router.get("/api", (req, res) => {
    res.send("hello world");
});

router.get("/api/personal_site", (req, res) => {
    db.query("USE `personal_site`", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

router.get("/api/auth", (req, res) => {
    db.query("SELECT * FROM admin_login", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

router.post

router.get("/api/portfolio", (req, res) => {
    db.query("SELECT * FROM portfolio_input", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

router.post("/api/portfolio", (req, res) => {
    db.query("INSERT INTO portfolio_input (title, image, description) VALUES (?, ?, ?)", [req.body.title, req.body.image, req.body.description], function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

router.get("/api/portfolio/:portfolioID", (req, res) => {
    db.query(`SELECT * FROM portfolio_input WHERE portfolioID=${req.params.portfolioID}`, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

router.delete("/api/portfolio/:portfolioID", (req, res) => {
    db.query(`DELETE FROM portfolio_input WHERE portfolioID=${req.params.portfolioID}`, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

router.put("/api/portfolio/:portfolioID", (req, res) => {
    const { title, image, description } = req.body;
    db.query(`UPDATE portfolio_input SET title="${title}", image="${image}", description="${description}" WHERE portfolioID=${req.params.portfolioID}`, function (error, results, fields) {
        console.log(req.body);
        if (error) throw error;
        return res.status(200).send(results);
    });
})

router.get("/api/resume", (req, res) => {
    db.query("SELECT * FROM resume_input", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

router.get("/api/user", (req, res) => {
    db.query("SELECT * FROM user_input", function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
    });
})

export default router;

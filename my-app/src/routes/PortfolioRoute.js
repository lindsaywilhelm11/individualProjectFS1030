import express from 'express';
import db from '../database/Connection';

const router = express.Router();

router.get("/api/portfolio", (req, res) => {
    db.query('SELECT * FROM portfolio_input', function (error, results, fields){
        if (error) throw error;
        console.log("finished retrieval");
        return res.status(200).send(results);
    })
})

router.post("/api/portfolio/", async (req, res, next) => {
    try {
        db.query('INSERT INTO portfolio_input SET ?', [req.body], function (error, results, fields){
            if (error) throw error;
            console.log("finished portfolio add");
            return res.status(200).send(results);
        })
    } catch (error) {
    console.error(error);
    next(error);
    }
})

router.delete("/api/portfolio/delete", async (req, res, next) => {
    try {
        db.query(
            "UPDATE portfolio_input WHERE portfolio.portfolioID = ?;",[req.body.ID],
            function (error, results, fields) {
              if (error) throw error;
              console.log("finished portfolio delete update");
              return res.status(200).send(results);
        })
    } catch (error) {
    console.error(error);
    next(error);
    }
})

export default router;
import express from 'express';
import db from '../database/connection';
import * as jwt from 'jsonwebtoken'

const router = express.Router();

router.post("/api/portfolio/add", async (req, res, next) => {
    try {
        db.query('INSERT INTO portfolio SET ?', [req.body], function (error, results, fields){
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
            "UPDATE portfolio SET portfolio.ActiveFlag = 0 WHERE portfolio.ID = ?;",[req.body.ID],
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
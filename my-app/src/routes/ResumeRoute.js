import express from 'express';
import db from '../database/connection';

const router = express.Router();

router.get("/api/resume", (req, res) => {
    db.query('SELECT * FROM resume_input', function (error, results, fields){
        if (error) throw error;
        console.log("finished retrieval");
        return res.status(200).send(results);
    })

})

export default router;
import express from 'express';
import db from '../database/connection';
import * as jwt from 'jsonwebtoken'
const argon2 = require('argon2');



const router = express.Router();

router.get("/api/auth", (req, res) => {
    try{
        const {username, password, ID} = req.body

        if (!username || !password){
            return res.status(401).json({message: "incorrect credentials provided"})
        }

        db.query('SELECT * FROM admin_login WHERE Username = ?', [username], async function(error, results, fields) {
            if (error) throw error
            if(!results || !(await argon2.verify(results[0].password, password))){
                return res.status(401).json({message: "incorrect credentials provided"})
            } else {
                const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn: '5m'})
                console.log("Logged in as: " + username);
                if(ID){
                    console.log(username + " is also a SuperAdmin");
                }
                return res.send({token});          
            }
        });
    } catch(err){
        console.log(err)
    }
})



export default router;
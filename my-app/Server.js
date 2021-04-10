import express from "express";
import db from "./src/database/Connection";

const app = express();

app.use(express.json());

app.get("/api", function (req, res) {
    res.send('hello world');
})

app.listen(3001, () => 
console.log(`Server ready on http://localhost:3001`)
);
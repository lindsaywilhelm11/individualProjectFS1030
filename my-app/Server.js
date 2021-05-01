import express from "express";
import db from "./src/database/Connection";
import cors from "cors";
import routes from './src/routes/Routes';

const app = express();

const PORT=3001;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/', routes)

app.use((req, res, next) => {
    // global after middleware
    next()
    console.log(`Finished request: ${req.originalUrl}`)
})






export default app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`))


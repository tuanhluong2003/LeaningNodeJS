import express from 'express';

import bodyParser from "body-parser"; //lấy tham số client gửi cho chúng ta trên link 
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB"

require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let port = process.env.PORT || 2003;

configViewEngine(app);
initWebRoutes(app);


connectDB.connectDB();

app.listen(port, () => {
    console.log("Backend Nodejs is running in port " + port);
})

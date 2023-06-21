const express = require("express");
// require('dotenv').config() no need write create file on config just import
const bodyParser = require("body-parser");


// importing env file from config
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');


const setupAndStartServer = async () => {

    //create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);

    // const PORT = 3000; no need it directly access from port variable
    app.listen(PORT, () => {
        console.log(`Sarver started at ${PORT}`);
        // console.log(process.env); np need to print it just for checking
    });
}


setupAndStartServer();
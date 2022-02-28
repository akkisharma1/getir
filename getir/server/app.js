const express = require("express");


const v1Routes = require("./routes/v1");

//Initialise the express app.
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Using routes
// app.use('/v1/church', churchRoutes);
app.use("/api", v1Routes);


module.exports = app;

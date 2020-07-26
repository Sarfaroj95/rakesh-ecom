const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRouter = require('./routers/router');
const config = require('./config/dev');



const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/api/v3/", UserRouter);


app.get('/', function (req, res) {
    res.send(`<h3>I am working </h3>`)
});


mongoose.connect(config.DB_URL, (err, doc) => {
    if (err) {
        console.log(err);
    } else {
        console.log("conected successfully");
    }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, function () {
    console.log(`app is running on http://localhost:${PORT}`);
});
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();

//db

app.get("/",(req,res)=>{
   return res.json("hye");
})

//app-middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors({ origin: process.env.CLIENT_URL }));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`API is running on port ${port}`));

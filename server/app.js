const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

//db connection

//app-middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors({ origin: process.env.CLIENT_URL }));

//routes
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const bookmarkRoutes = require("./routes/bookmark");

//middlewares
app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", bookmarkRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`API is running on port ${port}`));

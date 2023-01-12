const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// 
app.use(express.json());
app.use(cors());

const productRouter = require("./routers/product.route")

app.use('/api/v1/product', productRouter);

app.get("/", (req,res)=>{
    res.send("Router is working");
});

module.exports = app;
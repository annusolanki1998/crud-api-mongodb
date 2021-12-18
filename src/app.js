const express = require("express");
require('./db/conn')
const Student = require("./models/students");
const app = express();
//const port = process.env.PORT || 6000;

//app.get("/", (req,res) => {
// res.send("Hello from the other sides by Annu.");
//})
// Create a new student
app.get('/',(req,res) => {
    res.send("Hello from get")
})

app.listen(3000, () => {
    console.log("Connection is setup at 3000")
})
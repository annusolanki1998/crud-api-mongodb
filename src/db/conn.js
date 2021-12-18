const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api" , {
    useCreatIndex:true,
    useNewUrlParse:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection is sucessful")
}).catch((e) =>{
    console.log("No connection"); 
})
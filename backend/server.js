import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`Server listening at port ${process.env.PORT} `)
});

// import express from "express"
// import mongoose from "mongoose"


// const app=express();
// mongoose.connect('mongodb://localhost:27017/mydatabase')
// .then(()=>{
//     console.log("datbase is connected");
// })

















app.listen(4000,()=>{
     console.log("Server listening at port 4000")
    });

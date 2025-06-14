const express= require("express");
const {courseRouter}=require("./routes/course")
const{userRouter}=require("./routes/user")
const{adminRouter}=require("./routes/admin")
const path = require('path');


const app=express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);

app.listen(3000,()=>{
    console.log("app is listening on port 3000")
})
const {Router}=require("express")
const adminRouter=Router();
const jwt=require("jsonwebtoken");
const { adminModel, courseModel } = require("../db");
 
const JWT_ADMIN="122324"
adminRouter.post("/signup",async function(req,res){
    const{email, password}=req.body;
    await adminModel.create({
        email:email,
        password:password
    })

    res.json({
        message:"singup endpoint"
    })
})
adminRouter.post("/signin",async function(req,res){
    const {email , password}=req.body;
    admin =await adminModel.findOne({
        email:email,
        password:password
    })
    if(admin){
        const token=jwt.sign({
            id:admin._id,

        },JWT_ADMIN)
        res.json({
            token:token
        })
    }

    else{
        res.status(404).json({
            message:"invalid credentials"
        })
    }
})
adminRouter.post("/course",async function(req,res){

    const admin_id=req.userId;
    const {title,description,imageurl,price}=req.body;
    const course=await courseModel.create({
        title: title,
        description:description,
        imageUrl:imageUrl,
        price: price,
        createrId: admin_id
    })
    res.json({
        message: "course created",
        courseId:course._id
    })
})
adminRouter.put("/course",async function(req,res){
    const admin_id=req.userid;
    const {title,description,imageurl,price}=req.body;
    const course=await courseModel.updateOne({
        _id: courseId
    },{
        title:title,
        decription: description,
        imageUrl: imageUrl,
        price: price

    })
    res.json({
        message: "course updated",
        courseId:course._id
    })










    
})
adminRouter.get("/course/bulk",async function(req,res){
    const admin_Id=req.userId;
    const courses=await courseModel.find({
        createrId:admin_Id
    })
    res.json({
        message:"singup endpoint"
    })
})
module.exports={
     adminRouter:adminRouter
}
    


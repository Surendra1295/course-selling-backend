const {Router}=require("express");
const userRouter=Router();
const { adminModel, userModel, purchaseModel }=require("../db")
const jwt=require("jsonwebtoken")
const JWT_userpassword="aladld123"



userRouter.post("/signup",function(req,res){
    const {email, password, firstName,lastName}=req.body;
    userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message:"signup successfull"

    })
})
userRouter.post("/signin",async function(req,res){
    const{email,password}=req.body;
    user=await userModel.findOne({email,password})
    if(user){
        const token=jwt.sign({
            id: user._id

        },JWT_userpassword);
        res.json({
            token: token
        })
    
    }
    else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }

   
    res.json({
        message:"signin endpoint"

    })
})
userRouter.get("/purchases",async function(req,res){
    const userId=req.userId;
    const purchases=await purchaseModel.find({
        userId,
    })

    let purchasedcourseIds=[];
    for(let i=0;i<purchases.length();i++){
        purchasedcourseIds.push(purchases[i].courseId)
    }

    res.json({
        purchases,
        purchasedcourseIds


    })
})
module.exports={
    userRouter:userRouter
};
const jwt=require("jsonwebtoken")
const {JWT_userpassword}=reuqire("../config")
function usermiddleware(req,res,next){
    const token=req.headers.token;
    const decoded=jwt.verify(token,process.env.JWT_userpassword);
    if(decoded){
        req.userId=decoded.id;
        next()


    }
    else{
        res.status(403).json({
            message: "you are not signed in"
        })
    }
}
module.exports={
    usermiddleware:usermiddleware
}
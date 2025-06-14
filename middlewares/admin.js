const jwt=require("jsonwebtoken")
const {JWT_ADMIN}=reuqire("../config")
function adminmiddleware(req,res,next){
    const token=req.headers.token;
    const decoded=jwt.verify(token,process.env.JWT_ADMIN);
    if(decoded){
        req.admin_id=decoded.id;
        next()


    }
    else{
        res.status(403).json({
            message: "you are not signed in"
        })
    }
}
module.exports={
    adminmiddleware:adminmiddleware
}
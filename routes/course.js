const { Router } = require("express");
const { courseModel } = require("../db");
const courseRouter = Router();

courseRouter.post("/purchase", async function(req, res) {
    const{title,description,price,imageUrl,createrId}=req.body()
    course= await courseModel.create({
        title:title,
        description:description,
        price:price,
        imageUrl:imageUrl,
        createrId:createrId


    })
    res.json({
        message: "course purchased"
    });
});

courseRouter.get("/preview", function(req, res) {
    res.json({
        message: "course to view"
    });
});

module.exports = {
    courseRouter: courseRouter
};

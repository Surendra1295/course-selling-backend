
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.X);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;

const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;

const userSchema=new Schema({
    email: {type: String,unique: true},
    password: String,
    firstName: String,
    lastName: String,


})
const adminSchema=new Schema({
    email: {type: String,unique: true},
    password: String,
    firstName: String,
    lastName: String,


})
const courseSchema=new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId


})
const purchaseSchema=new Schema({
    userId: ObjectId,
    courseId: ObjectId


})
const userModel=mongoose.model("user",userSchema);
const adminModel=mongoose.model("admin",adminSchema);

const courseModel=mongoose.model("course",courseSchema);
const purchaseModel=mongoose.model("purchase",purchaseSchema);
module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}

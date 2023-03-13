

const mongoose=require("mongoose")
mongoose.set("strictQuery",true)
const connection=mongoose.connect("mongodb+srv://akarshgupta007:Ak161998@cluster0.yb4ucuj.mongodb.net/?retryWrites=true&w=majority")

module.exports=connection;

const {MongoClient} = require('mongodb');
const mongoose =require('mongoose');
const config = require('config');
const uri = "mongodb+srv://contactadmin:q2w3e4r5@contactmanager.v6tzr.mongodb.net/contactManager?retryWrites=true&w=majority";


const connectDB =async ()=>{
    try{
        await mongoose.connect(uri , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MONGODB connected');
    }
    catch(err){
        console.log(err)
    }
}



module.exports = connectDB;
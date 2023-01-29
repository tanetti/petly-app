const mongo = require("mongoose");
require("dotenv").config();


const DB_HOST = process.env.DB_HOST;

const connectMongo = async() => {
    try {
        return mongo.connect(
            DB_HOST, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },


            console.log("Database connection successful"),
        );
    } catch (err) {
        console.error(err);
    }

};



module.exports = {
    connectMongo,

};
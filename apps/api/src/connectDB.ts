import mongoose from "mongoose";

const connectDB = () => {
    try {
        mongoose.connect(`mongodb://localhost:27017/ecomapp`);
        console.log("connected to the local DB");
    }
    catch (err) {
        console.log(err);
    }
}

export default connectDB;
import mongoose from "mongoose";

const connectDB = () => {
    try {
        mongoose.connect(`mongodb://localhost:27017/ecomapp`).then(() => console.log("Database connected"))
            .catch((err) => console.log("Error connecting to the DB", err))
    }
    catch (err) {
        console.log(err);
    }
}

export default connectDB;
import mongoose from "mongoose";

const connectDb = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URI);
}
mongoose.connection.on("connected", () => console.log("Mongoose connected to mongoDB"));
// mongoose.connection.on("error", (err) => console.log(`Mongoose connection error: ${err.message}`));
mongoose.connection.on("disconnected", (err) => console.log(`Mongoose disconnected to mongoDB`));


export default connectDb
import mongoose from "mongoose";
const connectDatabase = () => {
  // Remove Depreciation Warnings
  mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb://localhost:27017/ChatGTP", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => console.log(`Connected to: ${data.connection.host}`));
};

export default connectDatabase;

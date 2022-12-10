import mongoose from "mongoose";
const chatSchema = new mongoose.Schema({
  RequestPrompt: {
    type: String,
    required: true,
  },
  ResponsePrompt: {
    type: String,
    required: true,
  },
});

export default  mongoose.model("Chats", chatSchema, "Chats");

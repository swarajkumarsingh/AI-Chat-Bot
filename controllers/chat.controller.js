import model from "../db/model/Chat.js";
import { ChatGPTAPI } from "chatgpt";
import { TOKEN } from "../config/keys.js";

const startChat = async (req, res) => {
  try {
    const api = new ChatGPTAPI({
      sessionToken: TOKEN,
    });

    var updatedToDB = false;

    const { RequestPrompt } = req.body;

    if (RequestPrompt == "") {
      return res.status(400).json({
        success: false,
        error: "Please Enter Prompt",
      });
    }

    // ensure the API is properly authenticated
    await api.ensureAuth();

    // send a message and wait for the response
    const response = await api.sendMessage(RequestPrompt);

    const data = await model.create({
      RequestPrompt: RequestPrompt,
      ResponsePrompt: response,
    });

    if ("RequestPrompt" in data) {
      updatedToDB = true;
    }

    return res.status(200).json({
      success: true,
      savedToDatabase: updatedToDB,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Error while fetching response",
    });
  }
};

export { startChat };

import express from "express";
import connectDatabase from "./db/DB.js";
import router from "./routes/chat.router.js";

const PORT = 5000;
const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DB
connectDatabase();

// Router
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`server connected to http://localhost:${PORT}`);
});

import express from "express";
import { startChat } from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/chat", startChat);

export default router;

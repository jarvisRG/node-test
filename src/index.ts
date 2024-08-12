import { Helius } from "helius-sdk";
import dotenv from "dotenv";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/webhook", async (req, res) => {
  const requestBody = req.body;
  console.log("Data received by webook: ", requestBody);
  res.status(200).send("Webhook Request Received!");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

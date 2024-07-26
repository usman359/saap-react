import axios from "axios";
import express from "express";
const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).send("Hello from the server!");
});

app.post("/shopify-webhook", (req, res) => {
  const data = req.body;
  res.status(200).json({ success: true, message: data });
});

app.listen(4500, () => console.log("Server is running on port 4500"));

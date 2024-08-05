import express from "express";
const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).send("Hello from the server!");
});

app.get("/test", (_, res) => {
  res.status(200).send("This is a test endpoint");
});

app.post("https://localhost:50000/b1s/v1/Login", (_, res) => {
  const data = req.body;
  res.status(200).json({ success: true, message: data });
});

app.post("/shopify-webhook", (req, res) => {
  const data = req.body;
  res.status(200).json({ success: true, message: data });
});

app.listen(4500, () => console.log("Server is running on port 4500"));

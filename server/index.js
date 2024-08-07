const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const https = require("https");

const app = express();

// Enable CORS
app.use(cors());

const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // Disable SSL certificate verification
});

const apiProxy = createProxyMiddleware({
  target: "https://localhost:50000",
  changeOrigin: true,
  secure: false, // Disable SSL for the target
  agent: httpsAgent,
  pathRewrite: {
    "^/b1s/v1": "/b1s/v1", // Rewrite the URL path
  },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader("Host", "192.168.100.9");
  },
});

app.use("/b1s/v1", apiProxy);

app.listen(3001, () => {
  console.log("Proxy server is running on http://localhost:3001");
});

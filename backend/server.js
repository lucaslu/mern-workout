require("dotenv").config();

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "welcome to the app" });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT} 🚀`);
});

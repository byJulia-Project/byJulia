const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Estou na rota /");
})

app.listen(port, () => {
  console.log("Hello, I'm Listen");
});
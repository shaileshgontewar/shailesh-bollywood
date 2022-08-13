const express = require("express");
const app = express();
const bollywoodData = require("./mydata.json");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Nagpur");
});
app.get("/bollywood", (req, res) => {
  res.send(bollywoodData);
});

app.listen(port, () => {
  console.log(`App is listining to port ${port}`);
});

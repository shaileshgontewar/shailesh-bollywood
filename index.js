const express = require("express");
const app = express();
const cors = require("cors");
const bollywoodData = require("./mydata.json");

const port = process.env.PORT || 3000;

app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello Nagpur");
});
app.get("/bollywood", (req, res) => {
  res.send(bollywoodData);
});

app.listen(port, () => {
  console.log(`App is listining to port ${port}`);
});

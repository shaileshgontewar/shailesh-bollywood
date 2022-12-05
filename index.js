const express = require("express");
const app = express();
const cors = require("cors");
const bollyRouter = require("./route/Bollywood");
const hollyRouter = require("./route/Hollywood");
const techRouter = require("./route/Technology");
const fitRouter = require("./route/Fitness");
const foodRouter = require("./route/Food");
const homeRouter = require("./route/Home");
// const bollywoodData = require("./mydata.json");

const port = process.env.PORT || 3000;

app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: "*",
  })
);
app.use("/api", bollyRouter);
app.use("/api", hollyRouter);
app.use("/api", techRouter);
app.use("/api", fitRouter);
app.use("/api", foodRouter);
app.use("/api", homeRouter);

app.get("/", (req, res) => {
  res.send("<h1>Bollywood blog data</h1>");
});

app.listen(port, () => {
  console.log(`App is listining to port ${port}`);
});

const app = require("./config/express");
const router = require("./app/routers/index");

app.use("/healthCheck", (req, res) => {
  res.send("Ok");
});

app.use("/api", router);

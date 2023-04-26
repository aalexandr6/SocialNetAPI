const express = require("express");
const db = require("./config/connection.js");
const routes = require("./routes");

const app = express();
const PORT = 3001;

//listening
app.use(express.json());
app.use(routes);

//listening
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

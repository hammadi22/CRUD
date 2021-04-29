const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const personRoute = require("./routes/personRoute");

app.use(express.json());

connectDB();

app.use("/persons", personRoute);

const port = 5000;
app.listen(port, (err) =>
  err ? console.log("error") : console.log(`server is running on port ${port}`)
);
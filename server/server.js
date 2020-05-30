const express = require("express");
const server = express();

const articleRouter = require("./article/router");

require("dotenv").config();

const uri = process.env.ATLAS_URI;

const mongoose = require("mongoose");
// connect to the database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// open the connection
const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB connection established."));

// to format requests into JSON
server.use(express.json());
// to correctly get the information from submissions
server.use(express.urlencoded({ extended: false }));
//  router to accept any incoming request where the path starts with articles
server.use("/articles", articleRouter);

const PORT = process.env.port || 4000;
server.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}`)
);

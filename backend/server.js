import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
const app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://auto-dog.herokuapp.com/"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  next();
});

app.use("/users", userRoutes);

// const express = require("express");

// const mongoose = require("mongoose");
// require("dotenv").config();
import express from "express";

const app = express();
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
import cors from "cors";
import jobsRouter from "./routes/jobsRouter.js";
import userRouter from "./routes/routes.js";
dotenv.config();

mongoose.connect("mongodb+srv://ramakrishna:Rkreddy494635@mycluster.lnqjq.mongodb.net/");

mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log("MongoDB Error: " + error);
  });

app.use(express.json());
app.use(cors());
app.use(express.static("images"));

app.use(userRouter);
app.use(jobsRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});

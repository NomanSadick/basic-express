// Basic Lib Import
const express = require("express");
const router = require("./src/route/api");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser =require('body-parser');
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const app = express();

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());


app.use(express.json());

// Body Parser Implement
app.use(bodyParser.json())


// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);


async function connectToDatabase() {
    const URI = "mongodb+srv://<username>:<password>@cluster0.rbbqn.mongodb.net/CRUD?retryWrites=true&w=majority";
    const OPTIONS = { user: 'testuser111', pass: 'testuser111', autoIndex: true };
  
    try {
      await mongoose.connect(URI, OPTIONS);
      console.log("Connection Success");
    } catch (error) {
      console.error("Connection Error:", error);
    }
  }
  
  connectToDatabase();
  

// Routing Implement
app.use("/api/v1", router);

module.exports = app;
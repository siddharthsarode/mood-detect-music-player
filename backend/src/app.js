const fs = require("fs");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const songRoute = require("./routes/song.route");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const allowedOrigins =
  process.env.NODE_ENV === "development"
    ? ["http://localhost:5173", "http://localhost:3000"]
    : ["https://echomood-lqbl.onrender.com"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// app.use(
//   cors({
//     origin:
//       process.env.NODE_ENV === "development"
//         ? ["http://localhost:5173", "http://localhost:3000"]
//         : [process.env.HOST_CLIENT, process.env.HOST_SERVER],
//   })
// );

app.use("/songs", songRoute);

module.exports = app;

require("dotenv").config();
const app = require("./src/app");
const { connectDB } = require("./src/db/db");

const PORT = process.env.PORT || 5000;

// Connect db
connectDB();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on ${PORT} port.`);
});

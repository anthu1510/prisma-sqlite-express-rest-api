require("dotenv").config();
const express = require("express");

const app = express();

// middleware config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route config
app.use("/users", require("./src/routes/userRouter"));
const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);

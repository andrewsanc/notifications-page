const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World"));

app.use("/api/notifications", require("./routes/notificationsRoute"));
app.use("/api/users", require("./routes/usersRoute"));

app.listen(port, () => console.log(`Server running on port ${port}`));

const express = require('express');
const app = express();
//all route
const userRoutes = require('./routes/user.route.js');

const port = process.env.PORT || 5000;
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Welcome to server");
});

app.use("/user", userRoutes);

//
app.listen(port, () => {
    console.log("listining to port", port);
});
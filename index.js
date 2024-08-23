const express = require("express");
const path = require('path');
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");


const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));



app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/message", messageRouter)


app.listen(PORT, console.log(`Listening on port ${PORT}!`))
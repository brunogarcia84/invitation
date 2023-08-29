require("dotenv").config();

// IMPORT MODULES
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const session = require("express-session");
// const MongoStore = require("connect-mongo");

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({
//       mongoUrl: process.env.MONGODB_URI,
//     }),
//   })
// );

// TEMPLATE ENGINE
app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "layouts/layout");
app.use(expressLayout);
app.use(express.static("public"));

// IMPORT PERSONAL MODULES
const indexRouter = require("./routes/indexRouter");

// USING PERSONAL MODULES
app.use(indexRouter);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

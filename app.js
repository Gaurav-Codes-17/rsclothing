const express = require('express');
const ownersRouter = require("./routes/ownersRouter")
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const path = require('path');
const db = require("./config/mongoose-connection")
const cookieParser = require('cookie-parser');
const app = express();
const PORT  = 3000
 require('dotenv').config()

app.set("view engine" , "ejs")


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , "public")))
app.use(cookieParser());


app.use("/user" , usersRouter)
app.use("/product" , productsRouter)
app.use("/owner" , ownersRouter)

app.listen(PORT)




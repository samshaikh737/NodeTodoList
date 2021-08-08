const express = require("express");
const app = express();
const port = process.env.PORT || 8000

require("dotenv").config() //dotenv activated
require("./db/conn/conn"); // db connection
app.use(express.json()) //bodyperser

const routes = require("./routes/app"); //routes
app.use("/api",routes);//routes url


app.listen(port,()=>console.log(`server is listing ${port}`))

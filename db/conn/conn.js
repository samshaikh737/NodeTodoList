const mongoose = require("mongoose");
//db
const url = process.env.DB_URL;

const dbConnection = mongoose.connect(url,{
    useNewUrlParser : true,
    // useCreateIndex : true,
    useUnifiedTopology : true,
    useFindAndModify : false
}).then(()=>console.log("db is connected")).catch((err)=>console.error(err))

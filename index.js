const express = require("express");
const app = express();
app.use(express.json());








app.listen(4500,()=>{
    console.log("Server is started");
})
// importing dependency
const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")

// using dependency
const app = express();
app.use(cors())
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.send('working fine')
})

app.listen(6767)
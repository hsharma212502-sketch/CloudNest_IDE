const express = require('express')


const app = express()

app.get('/',(req,res) => res.json({msg:"heyfrom my own server"}));


app.listen(8000,() => console.log(`server started on port${8000}`))
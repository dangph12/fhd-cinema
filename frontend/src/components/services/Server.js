var express = require('express')
var cors = require('cors')
var app = express()

// app.use(cors({
//     origin: "http://localhost:8080/movies",
//     method:["GET", "POST","PUT", "DELETE"]
// }))

// app.use(cors());
app.use(cors({origin:true}))


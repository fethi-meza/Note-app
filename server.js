const express =require("express")
const cors =require("cors")
const bodyParser =require("body-parser")
const noteRouter =require("./Router/noteRout")

const Port =3000
const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/",(req,res)=>{res.send("hello world")})

app.use('/Nots', noteRouter)

app.listen(Port)

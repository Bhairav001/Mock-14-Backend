const express = require("express")
const { BankRouter } = require("./routes/BankRouter")
const { connection } = require("./db")
const cors = require("cors")
const app = express()

app.use(express.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.send("Masai Hotel")
})


app.use("/bank",BankRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    
    console.log(`Server runing at port ${process.env.port}`)
})

const express = require("express");
const { BankModel } = require("../model/BankModel");


const BankRouter = express.Router()


BankRouter.get("/",async(req,res)=>{
    let query = req.query;
    try {
        const bank = await BankModel.find(query)
        res.send(bank)
    } catch (error) {
        console.log({"msg":"not getting data","error":error.message})
    }
})


BankRouter.post("/post",async(req,res)=>{
    const payload = req.body;
    try {
        const new_bank = new BankModel(payload)
        await new_bank.save();
        res.send("Created New Bank Account")
    } catch (error) {
        console.log(error)
        res.send({"msg":"Something went wrong"})
    }
})

module.exports = {
    BankRouter
}
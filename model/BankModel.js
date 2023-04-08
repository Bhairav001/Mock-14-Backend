const { default: mongoose } = require("mongoose");

const BankSchema = mongoose.Schema({
    openAccount: String,
    updateKYC:String,
    depositMoney:String,
    withdrawMoney:String,
    transferMoney:String,
    printStatement:String,
    closeAccount:String
})

const BankModel = mongoose.model("bank", BankSchema)

module.exports = {
    BankModel
}
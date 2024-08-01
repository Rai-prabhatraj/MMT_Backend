const mongoose = require("mongoose");

const AdvDetailsSchema = new mongoose.Schema({
    cityId : {
        type : mongoose.Schema.Types.ObjectId,
        rel : "adventures",
        required : true
    },
    subtitle : {
        type : String,
        required : true
    },
    descrption : {
        type : [String]
    },
    openingTime : {
        type : [String],
        required : true
    },
    duration : {
        type : Number,
        required : true
    },
    pricePerHead : {
        type : Number,
        required : true
    },
    currency : {
        type : String,
        default : "INR"
    }
})

const AdvDetailsModel = mongoose.model("adventures", AdvDetailsSchema)

module.exports = AdvDetailsModel
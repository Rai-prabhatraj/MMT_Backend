const mongoose = require('mongoose');

const AdventureSchema = new mongoose.Schema({
    cityId : {
        type : mongoose.Schema.Types.ObjectId,
        rel : "cities",
        required : true
        },
    category : {
        type : String,
        required : true
    },
    images : {
        type : [String],
        required : true
    },
    duration : {
        type : Number,
        required : true
    },
    priceperHead : {
        type : Number,
        required : true
    },
    currency : {
        type : String,
    
    }
})

const AdventureModel= mongoose.model( "adventures" , AdventureSchema);

module.exports = AdventureModel;
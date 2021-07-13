const mongoose = require('mongoose');

//schema means you mention the rules of it
let productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    image : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    qty : {
        type : Number,
        required : true
    },
    info : {
        type : String,
        required : true
    },
    created : {
        type : Date,
        default : Date.now()
    }
});

//create a model
//product is the my table name
let Product = mongoose.model('product', productSchema);

//i use in my router
module.exports = Product;



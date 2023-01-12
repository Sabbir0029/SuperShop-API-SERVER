const mongoose = require("mongoose");

const productSchama = mongoose.Schema({
    name:{
        type:String,
        required : true,
        unique : true,
    },
    model:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['in-stock', 'out-of-stock',]
    }

},{
    timestamp:true
});

const Product = mongoose.model('Product', productSchama);

module.exports = Product;
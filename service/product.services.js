const Product = require("../Models/Product");

exports.productGetServics = async ()=>{
    const result = await Product.find({});
    return result
}

exports.ProductPostService = async (data) =>{
    const product = new Product(data);
    const result = await product.save();
    return result;
}
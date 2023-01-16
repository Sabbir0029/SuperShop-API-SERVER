const Product = require("../Models/Product");
const { ProductPostService, productGetServics } = require("../service/product.services");

exports.getProduct = async (req, res) => {
    try {
        const result = await productGetServics();
        res.status(200).json({
            status: "success",
            message: "data get successfully",
            data: result,
          });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "data not get",
            error: error.message,
          });
    }
};

exports.postProduct = async (req, res) => {
  try {
    console.log(req.body);
    const result = await ProductPostService(req.body);
    res.status(200).json({
      status: "success",
      message: "data post successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data not post",
      error: error.message,
    });
  }
};

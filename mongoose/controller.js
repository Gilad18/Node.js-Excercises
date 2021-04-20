const productModel = require('./model')

const createNewProduct = (req,res) => {
    const { productName, productCategory, productDetails } = req.body;
    console.log(req.body)


    const product = new productModel({
        productName : productName,
        productCategory : productCategory,
        productDetails : productDetails
    });

product.save((err)=> {
    if (err) return res.json({"error" : err})
    return res.json({"success": product})
})
}

const getProducts = (req, res) => {
    productModel.find({}).then((product) => {
        return res.send(product)
    });
}

module.exports = {
    create: createNewProduct,
    getAll : getProducts
    
}
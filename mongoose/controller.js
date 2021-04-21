const productModel = require('./model')

const createNewProduct = async (req,res) => {
    const { productName, productCategory, productDetails } = req.body;

    const product = new productModel({
        productName : productName,
        productCategory : productCategory,
        productDetails : productDetails
    });

    try {
       await product.save()
       res.json({"success": product})
    } catch (e){
        res.json({"error" : err})
    }
}

const getProducts = async (req, res) => {
    try {
        const data = await productModel.find({})
        res.send(data)
    } catch {
          res.send(e)
    }
}

const getProductByName = async (req,res) => {
    const name = req.params.name;

    try {
       const product = await  productModel.find({productName:name})
        res.send(product)
    } catch {
         res.status(400).send(e)
    }
}


const getProductbyStatus = async (req,res) => {
   try {
     const activeProducts = await productModel.find({productIsActive:true})
     res.send(activeProducts)
   } catch {
    res.status(400).send(e)
   }
}

const getProductsByPrice = async (req,res) => {
    const amount = req.params.amount;
    try {
       const products = await  productModel.find({});
       const underAmountProducts = products.filter(pr => pr.productDetails.price <= amount)
       res.send(underAmountProducts)
    } 
    catch {
        res.status(400).send(e)
    }
}

module.exports = {
    create: createNewProduct,
    getAll : getProducts,
    getProductByName,
    getProductbyStatus,
    getProductsByPrice
    
}
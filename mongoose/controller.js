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

const updateStatusAndDiscount = async (req, res) => {
    const updates = Object.keys(req.body)
    const allUpdates = ["productName","productCategory","productIsActive", "productDetails.discount", "productDetails.price", "productDetails.phone"]
    const isValidUpdate = updates.every((item)=> {
        return allUpdates.includes(item)
    })

    if (isValidUpdate) {
       try {
           const update = await productModel.findByIdAndUpdate(req.params.id , req.body, {new:true , runValidators:true})

           if(update) {
            res.send(update)
           } else {
            res.status(400).send(e)
           }

       } catch(err) {
        res.status(400).send(e)
       }
    }
    else {
        res.status(400).send({error : 'You cant make this updates'})
    }
}

const deleteProduct = async (req,res) => {
    const deleted =  await productModel.findByIdAndDelete(req.params.id ,(err,doc) => {
      if (err) return res.send(err)
      if (doc) return res.send(doc)
      return res.json({error : 'Product wasnt found' })
       
    })
}

const deleteAll = async (req ,res) => {
    await productModel.findByIdAndDelete({},(err,doc) => {
        if (err) return res.send(err)
        if (doc) return res.send(doc)
        return res.json({error : 'Product wasnt found' })
         
      })
}



module.exports = {
    create: createNewProduct,
    getAll : getProducts,
    getProductByName,
    getProductbyStatus,
    getProductsByPrice,
    updateStatusAndDiscount,
    deleteProduct,
    deleteAll
}
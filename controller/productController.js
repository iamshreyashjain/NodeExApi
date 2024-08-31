let products = require('./../Products')

exports.getAllProducts = (req, res)=>{
    res.json(products)
}
exports.getProductbyId= (req,res)=>{
      res.json(products.filter((products) => products.id === parseInt(req.params.id)));
  }
    
  exports.deleteProductbyId= (req,res)=>{
    res.json(products.filter((products) => products.id !== parseInt(req.params.id)));
}
  
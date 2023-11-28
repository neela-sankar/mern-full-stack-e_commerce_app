const express = require('express')
const {isAdmin, requireSignIn} = require ('./../middlewares/authMiddleware')
const {createProductController, getProductController, 
    getSingleProductController, productPhotoController, 
    deleteProductController, updateProductController, 
    productFilterController, productCountController, 
    productListController, searchProductController, 
    relatedProductController, productCategoryController, braintreeTokenController, braintreePaymentController} = require('../controllers/productController')
const formidable = require('express-formidable')

const router = express.Router()

//routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)

//update routes
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController)

//get products
router.get('/get-product', getProductController)

//get single product
router.get("/get-product/:slug", getSingleProductController)

//get photo
router.get('/product-photo/:pid', productPhotoController)

//delete product
router.delete('/delete-product/:pid', deleteProductController)

//filter product
router.post('/product-filters', productFilterController)

//product count
router.get('/product-count',productCountController)

//product per page
router.get('/product-list/:page', productListController)

//search product
router.get('/search/:keyword', searchProductController)

//similar product
router.get('/related-product/:pid/:cid',relatedProductController)

//category vise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get('/braintree/token', braintreeTokenController)

//payments
router.post('/braintree/payment', requireSignIn, braintreePaymentController)

module.exports = router
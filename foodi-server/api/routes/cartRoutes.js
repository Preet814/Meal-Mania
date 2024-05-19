const express=require('express');
const Carts=require('../models/Carts.js');
const router=express.Router();
const verifyToken=require('../middleware/verifyToken.js');
const cartController=require('../controllers/cartControllers.js')
router.get('/',cartController.getCartsByEmail);
router.post('/',cartController.addToCart);
router.delete('/:id',cartController.deleteCart);
router.put('/:id',cartController.updateCart);
router.get('/:id',cartController.getSingleRecipe);
module.exports=router;
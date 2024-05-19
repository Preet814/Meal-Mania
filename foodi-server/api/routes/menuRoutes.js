const express=require('express');
const Menu = require('../models/Menu.js');
const router=express.Router();
const menuController=require('../controllers/menuControllers.js')
// get all menu items
router.get('/',menuController.getAllMenuItems);
router.post('/',menuController.postMenuItem);
router.delete('/:id',menuController.deleteMenuItem);
router.get('/:id',menuController.singleMenuItem);
router.patch('/:id',menuController.updateMenuItem);


module.exports=router;
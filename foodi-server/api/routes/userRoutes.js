const express = require('express')
const router = express.Router();
const verifyToken=require('../middleware/verifyToken.js');
const verifyAdmin = require('../middleware/verifyAdmin.js')
const userController=require('../controllers/userControllers.js');
router.get('/',verifyToken,verifyAdmin,userController.getAllUsers);
router.post('/',userController.createUser);
router.delete('/:id',verifyToken,verifyAdmin,userController.deleteUser);
router.get('/admin/:email',verifyToken,userController.getAdmin);
router.patch('/admin/:id',verifyToken,verifyAdmin,userController.makeAdmin);

module.exports = router;
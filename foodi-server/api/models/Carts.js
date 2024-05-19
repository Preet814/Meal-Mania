const mongoose=require('mongoose');
const {Schema}=mongoose;
// create schema objects from cart items
const cartSchema=new Schema({
    menuItemId: String,
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3
    },
    recipe: String,
    image: String,
    category: String,
    price: Number,
    quantity: Number,
    email: {
        type: String,
        trim: true,
        required: true,
    }
})
// create model
const Carts=mongoose.model("Cart",cartSchema);
module.exports=Carts;
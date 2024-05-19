const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIVE_SECRECT_KEY);

// import routes from here
const menuRoutes = require("./api/routes/menuRoutes.js");
const cartRoutes = require("./api/routes/cartRoutes.js");
const userRoutes = require("./api/routes/userRoutes.js");
const paymentRoutes = require("./api/routes/paymentRoutes.js");
const adminStats=require('./api/routes/adminStats.js')
const orderStats=require('./api/routes/orderStats.js')


// middleware
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster.fvw0bml.mongodb.net/demo-foodi-client?retryWrites=true&w=majority&appName=Cluster`
  )
  .then(console.log("Database connected successfully"))
  .catch((error) => console.log("error connecting to db,", error));

// jwt authentication
app.post("/jwt", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1hr",
  });
  res.send({ token });
});

app.use("/menu", menuRoutes);
app.use("/carts", cartRoutes);
app.use("/users", userRoutes);
app.use("/payments", paymentRoutes);
app.use('/admin-stats',adminStats);
app.use('/order-stats',orderStats);


// payment methods routes
const verifyToken=require('./api/middleware/verifyToken.js')

// stripe payments routes
app.post("/create-payment-intent",verifyToken, async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price * 100);
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`server running successfully on PORT: ${PORT}`);
});

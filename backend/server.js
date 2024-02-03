const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");

app.use(cors());
app.use(express.json());

app.use("/api/auth" , authRoute);
app.use("/api/users" , userRoute);
app.use("/api/products" , productRoute);
app.use("/api/carts" , cartRoute);
app.use("/api/orders" , orderRoute);
app.use("/api/checkout", stripeRoute);

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('mongodb connected')
    app.listen(process.env.PORT || 5000, () => {
        console.log("Node App running ")
    })
}).catch((err) => {
    console.log(err)
})


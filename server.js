
import express from 'express' ;
import cors from 'cors' ;
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';
import orderRouter from './routes/order.route.js';

// App config
const app = express() ;
const port = process.env.PORT || 6000;
connectDB()
connectCloudinary()

// Middleware setup
app.use(express.json());
app.use(cors());

// setup Api
app.get('/',(req,res)=>{
res.send('Api is working')
})

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.listen(port,()=>{
    console.log('server started: ' + port)
})
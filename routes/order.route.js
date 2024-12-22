

import express from 'express' ;
import {placeOrder,placeOrderRazorpay,verifyRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus,verifyStripe} from '../controllers/order.controller.js'
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin route
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);


// paymentt route
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
orderRouter.post('/razorpay',authUser,placeOrderRazorpay);

// User route
orderRouter.post('/userorders',authUser,userOrders);



// verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe);
orderRouter.post('/verifyrazorpay',authUser,verifyRazorpay);

export default orderRouter ;


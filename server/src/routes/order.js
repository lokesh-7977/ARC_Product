import express from 'express';
import { createOrder, getMyOrders, getOrderById, updateOrderToPaid } from '../controllers/order.js';

const router = express.Router();

router.post('/create', createOrder);
router.get('/myorders', getMyOrders);
router.get('/:id', getOrderById);
router.put('/:id/pay', updateOrderToPaid);


export default router;

import express from 'express';
import { createOrder, getOrders, getOrderById, updateOrderToPaid } from '../controllers/orderController.js';

const router = express.Router();

router.post('/create', createOrder);
router.get('/myorders', getOrders);
router.get('/:id', getOrderById);
router.put('/:id/pay', updateOrderToPaid);


export default router;

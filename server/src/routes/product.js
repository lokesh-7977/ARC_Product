import express from 'express';
import { createProduct,createProductByUserId,updateProduct,getUserUploadedProduct,deleteProduct,deleteProductByUserId } from '../controllers/productController.js';

const router = express.Router();

router.post('/create', createProduct);  
router.post('/create/:userId', createProductByUserId);
router.put('/update/:productId', updateProduct);
router.get('/user/:userId', getUserUploadedProduct);
router.delete('/delete/:productId', deleteProduct);
router.delete('/delete/:userId/:productId', deleteProductByUserId);

export default router;

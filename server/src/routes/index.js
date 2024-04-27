import { Router } from 'express';
import AuthRouter from './auth.js';
import ProductRouter from './product.js';
const router = Router();

router.use('/auth', AuthRouter);
router.use('/product', ProductRouter);


export default router;

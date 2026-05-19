import { Router } from 'express';
import { allProperties, createProperty, myProperties, verifyProperty } from '../controllers/propertyController.js';
import { adminOnly, protect } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = Router();

router.post('/', protect, upload.single('document'), createProperty);
router.get('/mine', protect, myProperties);
router.get('/all', protect, adminOnly, allProperties);
router.patch('/:id/verify', protect, adminOnly, verifyProperty);

export default router;

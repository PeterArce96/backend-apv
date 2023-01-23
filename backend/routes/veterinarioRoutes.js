import express from 'express'
const router = express.Router();
import { registrar, perfil, confirmar, autenticar } from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';

router.post('/', registrar);
router.get('/perfil',checkAuth, perfil);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);

export default router;
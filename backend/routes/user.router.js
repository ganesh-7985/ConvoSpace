import express from 'express';
import { newUser,login,getUserProfile,logout } from '../controllers/user.controller.js';
import { singleUpload } from '../middlewares/multer.middleware.js';
import isAuthenticated from '../middlewares/auth.js';


const router = express.Router();

router.post('/new',singleUpload, newUser);
router.post('/login',login)

// Here we are using the isAuthenticated middleware to protect the route
router.get('/me',isAuthenticated,getUserProfile)
router.get('/logout',logout)

export default router;

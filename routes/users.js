import express from 'express'
import { createUser,getUserById,getAllUsers,updateUser,deleteUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication',verifyToken,(req,res,next)=>{
//     res.send("Hello user! You are logged in.")
// });

// router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.send("You are logged in your acount and you can delete your account:")
// })

// router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>{
//     res.send("You are login as admin and can delete all the accounts")
// })
// create users
router.post('/', createUser);

// get user by id
router.get('/:id',verifyUser,getUserById);

// update user
router.put('/:id',verifyUser,updateUser);

// get all users
router.get('/',verifyAdmin,getAllUsers);

// delete user

router.delete('/:id',verifyUser,deleteUser)
 export default router
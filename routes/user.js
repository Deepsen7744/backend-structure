import express from 'express';
import { User } from '../modals/user.js';
import { deleteUser, getAllUsers, getUserDetails, register, special, updateUser } from '../controllers/user.js';


const router=express.Router();

router.get("/all",getAllUsers );

router.post("/new",register);

 router.get("/userid/special",special)

  //dynamic routing
 router.get("/userid/:id", getUserDetails);

 router.put("/userid/:id", updateUser);


router.delete("/userid/:id", deleteUser);



export default router;


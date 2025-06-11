import express from 'express'
import { createRoom, updateRoom,deleteRoom,getRoom,getRooms } from '../controllers/room.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router();

//create room
router.post('/:hotelid',verifyAdmin,createRoom);

//update room
router.put('/:id',verifyAdmin,updateRoom);

//delete room
router.delete('/:id',verifyAdmin,deleteRoom)

//get room by id
router.get('/:id',getRoom);

//get all rooms
router.get('/',getRooms);

export default router
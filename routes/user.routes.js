import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

router.get("/", getAllUsers)
router.get("/:id", getUser)
router.patch("/:id", verifyUser, updateUser)
router.delete("/:id", verifyUser, deleteUser)

export default router
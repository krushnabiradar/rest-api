import express from "express";
import { userController } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const { getUser, updateUser } =
  userController;
export const userRouter = express.Router();
userRouter.get("/user/:id", authMiddleware, getUser);
userRouter.put("/user", authMiddleware, updateUser);
userRouter.delete('/user/:id', authMiddleware, deleteUser)




// route.put('/api/users/:id', controller.update);
// route.delete('/api/users/:id', controller.delete);
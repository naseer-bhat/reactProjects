import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";
import { getAllUsers,getAllCourses,approveCourse} from '../controllers/admin/admin.controller.js'
const router = Router();
router.use(auth, allowRoles("admin"));
router.get("/users", getAllUsers);
router.get("/courses", getAllCourses);
router.patch("/courses/:id", approveCourse);
export default router;

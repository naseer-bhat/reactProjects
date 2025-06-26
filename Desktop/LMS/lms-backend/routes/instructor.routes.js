import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";
import{createCourse,updateCourse,deleteCourse,addLesson,evaluateSubmission,getSubmissionsByAssignment} from '../controllers/instructor/instructor.controller.js'
const router= Router()
router.use(auth,allowRoles('instructor'))
router.post('/courses',createCourse)
router.put('/courses/:id',updateCourse)
router.delete('/courses/:id',deleteCourse)
router.post('/courses/:id/lessons',addLesson)
router.put("/submissions/:submissionId/evaluate", evaluateSubmission);
router.get("/assignments/:assignmentId/submissions", getSubmissionsByAssignment);


export default router
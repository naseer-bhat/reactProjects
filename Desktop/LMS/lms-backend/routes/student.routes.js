import {Router} from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { allowRoles } from '../middlewares/role.middleware.js'
import {enrollInCourse,getEnrolledCourses,submitAssignment,getProgress,getMySubmissions} from '../controllers/student/student.controller.js'
const router= Router()
router.use(auth,allowRoles('student'))
router.get("/submissions/my",  getMySubmissions);
router.post('/enroll/:courseId',enrollInCourse)
router.get('/mycourses',getEnrolledCourses)
router.post('/submit/:assignmentId',submitAssignment)
router.post("/assignments/:assignmentId/submit", submitAssignment);
router.get('/progress/:courseId',getProgress)
export default router
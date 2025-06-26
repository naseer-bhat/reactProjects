import User from '../../models/user.model.js'
import Course from '../../models/course.model.js'
export const getAllUsers= async(req,res)=>{
    try {
        const users= await User.find({},'-password')
        return res.status(200).json({users})
    } catch (error) {
            res.status(500).json({ message: "Failed to fetch users", error: error.message });
    }
}
export const getAllCourses= async(req,res)=>{
    try {
        const courses= await Course.find().populate('instructor','name email')
        return res.status(200).json(courses)
        
    } catch (error) {
        res.status(500).json({msg:'failed to fetch courses',error:error.message})
    }

}
export const approveCourse= async(req,res)=>{
try {
    const courseId= req.params.id
    const course= await Course.find(courseId)
    if(!course) return res.status(404).json({msg:'Course not found'})
        course.approvedByAdmin=true
    course.published= true
    await course.save()
    return res.status(200).json({ message: "Course approved and published" });

} catch (error) {
        res.status(500).json({ message: "Failed to approve course", error: error.message });

}
}

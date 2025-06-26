import Course from "../../models/course.model.js"
import Lesson from "../../models/lesson.model.js"
import Submission from "../../models/submission.model.js";

export const createCourse= async(req,res)=>{
    try {
            const { title, description, category, price, image } = req.body
            if(!title || !description || !category ){
                return res.status(401).json({msg:'all fields required'})
            }
            const course= new Course({ title, description, category, price, image,instructor: req.user.userId })
            await course.save()
            return res.status(201).json({msg:'Course Created Successfully',course})
    } catch (error) {
        res.status(500).json({msg:'Failed to create Course',error:error.message})
    }

}
export const updateCourse= async(req,res)=>{
    try {
        const{id}= req.params
        const updates= req.body
        const course = await Course.findByIdAndDelete({_id:id,instructor:req.user.instructor},updates,{new:true})
    } catch (error) {
        
    }
    
}
export const deleteCourse= async(req,res)=>{
    try {
        const {id}= req.params
        const course = await Course.findByIdAndDelete({_id:id,instructor:req.user.userId})
        if(!course ){
            return res.status(404).json({msg:'Course not Found'})
        }
        res.status(200).json({msg:'course deleted Sucessfully'})
        
    } catch (error) {
        res.status(500).json({msg:'Failed to delete course',error:error.message})
    }
}
export const addLesson= async(req,res)=>{
    try {
        const{id:courseId}=req.params
        const {title,content,videoUrl}=req.body
        const course= await Course.findOne({_id:courseId,instructor:req.user.userId})
        if(!course){
            res.status(404).json({msg:'No course found'})
        }
        const lesson= new Lesson({
            course:courseId,
            title,
            content,
            videoUrl,
        })
        await Lesson.save()
        res.status(201).json({msg:'Lesson added successfully',lesson})
    } catch (error) {
        res.status(500).json({msg:"Failed to add lesson",error:error.message})
    }
}

export const evaluateSubmission = async (req, res) => {
  try {
    const { submissionId } = req.params;
    const { marksObtained } = req.body;

    const submission = await Submission.findById(submissionId).populate({
      path: "assignment",
      populate: { path: "lesson" }
    });

    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }

    // Optional: Validate instructor owns this lesson (access control)
    // if (submission.assignment.lesson.instructor.toString() !== req.user.userId) {
    //   return res.status(403).json({ message: "Unauthorized to evaluate this submission" });
    // }

    submission.marksObtained = marksObtained;
    await submission.save();

    res.status(200).json({ message: "Submission evaluated", submission });
  } catch (err) {
    res.status(500).json({ message: "Error evaluating submission", error: err.message });
  }
};
export const getSubmissionsByAssignment = async (req, res) => {
  try {
    const { assignmentId } = req.params;

    const submissions = await Submission.find({ assignment: assignmentId })
      .populate("student", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({ submissions });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch submissions", error: err.message });
  }
};


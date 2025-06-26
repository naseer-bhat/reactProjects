import Course from "../../models/course.model.js"
import Enrollment from '../../models/enrollment.model.js'
import Assignment from "../../models/assignment.model.js";
import Progress from "../../models/progress.model.js";
import Submission from "../../models/submission.model.js";

export const enrollInCourse= async(req,res)=>{
  try {
    const {courseId}=req.params
    const alreadyEnrolled= await Enrollment.findOne({student:req.user.userId,course:courseId})
    if(alreadyEnrolled) res.status(400).json({msg:'User already Enrolled',alreadyEnrolled})
      const enrollment= new Enrollment({
    student:req.user.userId,
    course:courseId
      })
      await enrollment.save()
      res.status(201).json({msg: 'Student registered Successfully',enrollment})
    
  } catch (error) {
    res.status(500).json({msg:'Failed to enroll',error:error.message})
    
  }

}
export const getEnrolledCourses= async(req,res)=>{
try {
  const courses= await Enrollment.find({student:req.user.userId}).populate('course')
  res.status(200).json(courses.map(e=>e.course))
} catch (error) {
      res.status(500).json({ message: "Failed to fetch enrolled courses", error: err.message })
}
}
// export const submitAssignment= async(req,res)=>{
// try {
//   const {assignmentId}= req.params
//   const {answer}= req.body
//   const assignment= await Assignment.findById(assignmentId)
//   if(! assignment) return res.status(404).json({msg:'Assignment not found'})
//     assignment.submissions.push({student:req.user.userId,answer})
//   await assignment.save()
//       res.status(200).json({ message: "Assignment submitted" });

// } catch (error) {
//       res.status(500).json({ message: "Failed to submit assignment", error: err.message });

// }
// }
export const getProgress= async(req,res)=>{
try {
    const { courseId } = req.params;

    const progress = await Progress.findOne({
      student: req.user.userId,
      course: courseId
    });

    if (!progress) return res.status(404).json({ message: "No progress found" });

    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch progress", error: err.message });
  }
}

export const submitAssignment = async (req, res) => {
  try {
    const { assignmentId } = req.params;
    const { answer } = req.body;

    const alreadySubmitted = await Submission.findOne({
      assignment: assignmentId,
      student: req.user.userId,
    });

    if (alreadySubmitted) {
      return res.status(400).json({ message: "You have already submitted this assignment." });
    }

    const submission = await Submission.create({
      assignment: assignmentId,
      student: req.user.userId,
      answer,
    });

    res.status(201).json({ message: "Assignment submitted successfully", submission });
  } catch (err) {
    res.status(500).json({ message: "Error submitting assignment", error: err.message });
  }
};
export const getMySubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ student: req.user.userId })
      .populate("assignment")
      .sort({ createdAt: -1 });

    res.status(200).json({ submissions });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch submissions", error: err.message });
  }
};

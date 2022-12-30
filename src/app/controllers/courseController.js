import Course from '../models/Courses.js';
import User from '../models/User.js';
const courseController = {
  registerCourse: (req, res) => {
    Course.findById(req.params.id,async function (err, docs) {
      if (err) {
        console.log(err);
      }
      else {
        const top5courses= await Course.find().sort(({ studentList : -1 }))
        .limit(5)
        const lec =await User.findOne({_id: docs.lecturer})
        const data =  req.session.userInfo || []
        
        let smallDataComment = [] 
        smallDataComment.push(docs.comment[0])
        smallDataComment.push(docs.comment[1])
        res.render("course/course", {
          course: docs,
          course_id:req.params.id,
          smallComment:smallDataComment,
          userdata : data,
          top5courses,
          lec,
        });
      }
    });
  },
  commentCourse: async (req, res) => {
    console.log("gooooooooooooo")
    const content = req.body.content || []
    const course_id = req.query.course_id
    const rating = req.body.rating || 0
    const data =  req.session.userInfo
    const course = await Course.findOne({ _id: course_id });

      for(let cou of course.comment){
        if(String(cou._id)===String(data._id)){
          return res.redirect("/course/"+course_id)
        }
      }
      if(rating!==0){
        const Total =((course.comment.length*course.numberStudentRate)+(rating-'0'))/(course.comment.length+1)
        console.log(Total)
         await Course.updateOne(
          { _id: course_id },
          { $set: { numberStudentRate: Total } }
        );
      }
      course.comment.push(
        {
          _id: data._id,
          name: data.username,
          content: content,
          rating: rating,
        }
      );
      const updated = await Course.updateOne(
        { _id: course_id },
        { $set: { comment: course.comment } }
      );
      return res.redirect("/course/"+course_id)
  },
  videoCourse: (req, res) => {
    try {
      res.render("course/video")
    }
    catch {

    }
  },
}

export default courseController;

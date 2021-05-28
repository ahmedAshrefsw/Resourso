const Course = require("../models/course");

const course_index = (req, res) => {
  Course.find()
    .sort({ createdAt: -1 })
    .then((courses) => {
      res.render("./course/index", { courses: courses, title: "All courses" });
    })
    .catch((err) => {
      console.log(err);
    });
};

// const blog_details = (req, res) => {
//   const id = req.params.id;
//   Blog.findById(id)
//     .then((result) => {
//       res.render("details", { blog: result, title: "Blog Details" });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.render("404", { title: "Blog not found" });
//     });
// };

const course_create_get = (req, res) => {
  res.render("./course/create", { title: "create" });
};

const course_create_post = (req, res) => {
  const course = new Course(req.body);
  course
    .save()
    .then((result) => {
      res.redirect("/course");
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
};

// const blog_delete = (req, res) => {
//   const id = req.params.id;
//   Blog.findByIdAndDelete(id)
//     .then((result) => {
//       res.json({ redirect: "/blogs" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

module.exports = {
  course_index,
  //   blog_details,
  course_create_get,
  course_create_post,
  //   blog_delete,
};

const Course = require("../models/course");

// const blog_index = (req, res) => {
//   Blog.find()
//     .sort({ createdAt: -1 })
//     .then((result) => {
//       res.render("index", { blogs: result, title: "All blogs" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

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

// const blog_create_get = (req, res) => {
//   res.render("create", { title: "Create a new blog" });
// };

const course_create_post = (req, res) => {
  const course = new Course({
    courseName: "test course",
    courseDescription: "this is the firstr test course here",
  });
  course
    .save()
    .then((result) => {
      //   res.redirect("/blogs");
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
  //   blog_index,
  //   blog_details,
  //   blog_create_get,
  course_create_post,
  //   blog_delete,
};

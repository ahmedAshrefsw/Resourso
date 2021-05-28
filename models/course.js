const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseDescription: {
      type: String,
      required: true,
    },
    university: {
      type: String,
    },
    year: {
      type: String,
    },
    level: {
      type: String,
    },
    semester: {
      type: String,
    },
    matrials: [
      {
        type: Schema.Types.ObjectId,
        ref: "Matrial",
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;

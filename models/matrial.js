const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matrialSchema = new Schema(
  {
    matrialName: {
      type: String,
      required: true,
    },
    matrialType: {
      type: String,
      required: true,
    },
    matrialContent: {
      type: String,
      required: true,
    },
    relatedCourse: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

const Matrial = mongoose.model("Matrial", matrialSchema);
module.exports = Matrial;

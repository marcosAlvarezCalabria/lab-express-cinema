const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is require"],
      minlength: [3, "Title needs  at least 3 chars"],
    },
    director: {
      type: String,
      required: [true, "Director is required"],
      minlength: [5, "Director needs at least 5 chars"],
    },
    stars: {
      type: [String],
      required: [false],
    },
    image: {
      type: String,
      minlength: [20, ""],
    },
    description: {
      type: String,
      minlength: [30, "The description could be more than 30 chars "],
    },
    showtimes: {
      type:[String]
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;

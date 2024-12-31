import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  hotelId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  }
});

export const reviewModel = mongoose.models.reviews || mongoose.model("reviews", reviewSchema);

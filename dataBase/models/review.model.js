import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    product: {
      type: Schema.objectId,
      ref: "product",
      required: true,
    },
    user: {
      type: Schema.objectId,
      ref: "user",
      required: true,
    },
    rate: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    }
  },
  { timestamps: true }
);

export const reviewModel = mongoose.model("review", reviewSchema);
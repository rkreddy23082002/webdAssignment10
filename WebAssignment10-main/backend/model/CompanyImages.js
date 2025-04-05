import mongoose from "mongoose";

const CompanyImages = mongoose.model(
  "CompanyImages",
  new mongoose.Schema({
    company: {
      type: String,
      required: true,
    },
    image: {
      data: Buffer},
    featured: {
      type: Boolean,
    },
  })
);
export default CompanyImages;

import CompanyImages from "../../model/CompanyImages.js";
// import { uploadImagesData } from "./index.js";

const uploadImagesData = async (req, res) => {
  //   console.log(req.body);
  const { company, image, featured } = req.body;
  try {
  const companyData = new CompanyImages({
    company,
    image: {
      data: req.file.buffer, // Save the binary data (Buffer)
    },
    featured,
  });
  await companyData.save();
  res.status(201).json({ message: "Image uploaded successfully!" });
  } catch (error) {
  res.status(500).json({ error: "Failed to upload image." });
  }
};

export default uploadImagesData;

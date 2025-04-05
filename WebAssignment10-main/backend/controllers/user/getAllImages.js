import CompanyImages from "../../model/CompanyImages.js";

const getAllImages = async (req, res) => {
  try {
    const images = await CompanyImages.find({}, "name image");

    const response = images.map((img) => ({
      company: img.name,
      image: img.image?.data
        ? `data:${img.image.contentType};base64,${img.image.data.toString("base64")}`
        : null,
    }));
  

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching images:", error);
    return res.status(500).json({ message: "Failed to fetch images." });
  }
};

export default getAllImages;

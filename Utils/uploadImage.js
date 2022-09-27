import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "suvrow9",
  api_key: "542411119464244",
  api_secret: "hNKO0Ds4ybcYrKy2WHPKvTkvV7E",
});

const uploadSingleImageToCloudinary = async (filePath, folderName) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: `${folderName}`,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default uploadSingleImageToCloudinary;

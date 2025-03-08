import express from "express";
const router = express.Router();
import multer from "multer";
import Property from "../models/Property.js";
import User from "../config/User.js";
import { cloudinary }  from "../config/cloudinary.js"; // Import cloudinary configuration
import { verifyToken } from "../Middlewares/VerifyToken.js"; //Import verifyToken

//Configuration Multer for File Upload - REMOVE MULTER, Cloudinary doesn't need it
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original file name
//   },
// });

// const upload = multer({ storage });  //REMOVE MULTER
const upload = multer({ dest: "uploads/" });


async function uploadToCloudinary(file) {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "event_images",
    });
    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Failed to upload image");
  }
}

/* CREATE PROPERTY */
router.post("/upload",verifyToken, upload.single("images"), async (req, res) => {  //REMOVE MULTER
  try {
    /* Take the information from the form */
    const {
      title,
      address,
      location,
      city,
      zipCode,
      propertyType,
      price,
      rooms,
      bedrooms,
      bathrooms,
      size,
      yearBuilt,
      description,
      features,
    } = req.body;

    // const images = req.files;  //NO NEED MULTER
    // if (!images) {  //NO NEED MULTER
    //   return res.status(400).send("No files uploaded."); //NO NEED MULTER
    // }  //NO NEED MULTER

    const image = req.file;

    const imageUrls = await uploadToCloudinary(image);

    const userId = req.user.id;

    const newProperty = new Property({
      creator: userId, // Associate the property with the logged-in user
      title,
      address,
      location,
      city,
      zipCode,
      propertyType,
      price,
      rooms,
      bedrooms,
      bathrooms,
      size,
      yearBuilt,
      description,
      features: JSON.parse(features),
      images: imageUrls, // Store Cloudinary URLs
    });

    await newProperty.save();

    res.status(200).json(newProperty);
  } catch (err) {
    console.error("Error creating property:", err);
    res
      .status(500)
      .json({ message: "Failed to create property", error: err.message });
  }
});

/* GET PROPERTIES */
router.get("/", async (req, res) => {
  try {
    const properties = await find().populate("creator");
    res.status(200).json(properties);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Failed to fetch properties", error: err.message });
    console.log(err);
  }
});

/* GET PROPERTY BY ID */
router.get("/:propertyId", async (req, res) => {
  try {
    const { propertyId } = req.params;
    const property = await findById(propertyId).populate("creator");
    res.status(200).json(property);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Property not found", error: err.message });
    console.log(err);
  }
});

export default router;
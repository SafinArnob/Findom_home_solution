import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Property from "../models/Property.js";
import { cloudinary } from "../config/cloudinary.js";
import { verifyToken } from "../Middlewares/VerifyToken.js";

const router = express.Router();

// Ensure uploads directory exists
const uploadsDir = "uploads";
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`);
  },
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type. Only JPEG, JPG, PNG and WEBP are allowed."),
      false
    );
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

async function uploadToCloudinary(file) {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "property_images",
    });

    // Remove file from local storage after upload to Cloudinary
    fs.unlinkSync(file.path);

    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    // Make sure to remove the file even if Cloudinary upload fails
    if (fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }
    throw new Error("Failed to upload image");
  }
}

/* CREATE PROPERTY WITH MULTIPLE IMAGES */
router.post(
  "/upload",
  verifyToken,
  upload.array("images", 10),
  async (req, res) => {
    try {
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

      const files = req.files;

      if (!files || files.length === 0) {
        return res.status(400).json({ message: "No images uploaded." });
      }

      // Upload all images to Cloudinary and collect the URLs
      const imageUploadPromises = files.map((file) => uploadToCloudinary(file));
      const imageUrls = await Promise.all(imageUploadPromises);

      const userId = req.user.id;

      const newProperty = new Property({
        creator: userId,
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
        images: imageUrls, // Store array of image URLs
      });

      await newProperty.save();

      res.status(201).json(newProperty);
    } catch (err) {
      console.error("Error creating property:", err);
      res
        .status(500)
        .json({ message: "Failed to create property", error: err.message });
    }
  }
);

/* UPDATE PROPERTY WITH MULTIPLE IMAGES */
router.put(
  "/:propertyId",
  verifyToken,
  upload.array("images", 10),
  async (req, res) => {
    try {
      const { propertyId } = req.params;
      const property = await Property.findById(propertyId);

      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }

      // Check if user is the creator of the property
      if (property.creator.toString() !== req.user.id) {
        return res
          .status(403)
          .json({ message: "Unauthorized to update this property" });
      }

      const updateData = { ...req.body };

      // Handle features if provided
      if (updateData.features) {
        updateData.features = JSON.parse(updateData.features);
      }

      // Handle image updates if provided
      if (req.files && req.files.length > 0) {
        const imageUploadPromises = req.files.map((file) =>
          uploadToCloudinary(file)
        );
        const newImageUrls = await Promise.all(imageUploadPromises);

        // Handle the keepOldImages flag
        if (
          req.body.keepOldImages === "true" &&
          Array.isArray(property.images)
        ) {
          updateData.images = [...property.images, ...newImageUrls];
        } else {
          updateData.images = newImageUrls;
        }
      }

      const updatedProperty = await Property.findByIdAndUpdate(
        propertyId,
        updateData,
        { new: true }
      );

      res.status(200).json(updatedProperty);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error updating property", error: err.message });
    }
  }
);

/* GET PROPERTIES */
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find().populate("creator");
    res.status(200).json(properties);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Failed to fetch properties", error: err.message });
  }
});
/* GET PROPERTY BY ID */
router.get("/:propertyId", async (req, res) => {
  try {
    const { propertyId } = req.params;
    const property = await Property.findById(propertyId).populate("creator");

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.status(200).json(property);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching property", error: err.message });
  }
});

/* GET USER PROPERTIES */
router.get("/user/:userId", verifyToken, async (req, res) => {
  try {
    const { userId } = req.params;

    // Verify user is requesting their own properties
    if (userId !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const properties = await Property.find({ creator: userId });
    res.status(200).json(properties);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching user properties", error: err.message });
  }
});

/* DELETE PROPERTY */
router.delete("/:propertyId", verifyToken, async (req, res) => {
  try {
    const { propertyId } = req.params;
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Check if user is the creator of the property
    if (property.creator.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete this property" });
    }

    await Property.findByIdAndDelete(propertyId);

    res.status(200).json({ message: "Property deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting property", error: err.message });
  }
});

export default router;

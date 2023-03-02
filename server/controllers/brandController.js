const Brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoDBid = require("../utils/validateMongoDBid");

//Make a new Brand
const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (e) {
    throw new Error(e);
  }
});

//Update a Brand
const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDBid(id);
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBrand);
  } catch (e) {
    throw new Error(e);
  }
});

//Delete Brand
const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDBid(id);
  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    res.json(deletedBrand);
  } catch (e) {
    throw new Error(e);
  }
});

//Fetch Brand
const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDBid(id);
  try {
    const brand = await Brand.findById(id);
    res.json(brand);
  } catch (e) {
    throw new Error(e);
  }
});

//Fetch all Brands
const getAllBrands = asyncHandler(async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (e) {
    throw new Error(e);
  }
});

module.exports = {
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
  getAllBrands,
};

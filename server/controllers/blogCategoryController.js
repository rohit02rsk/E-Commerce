const Category = require("../models/blogCategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDBid = require("../utils/validateMongoDBid");

//Make a new category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCat = await Category.create(req.body);
    res.json(newCat);
  } catch (e) {
    throw new Error(e);
  }
});

//Update a category
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDBid(id);
  try {
    const updatedCat = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCat);
  } catch (e) {
    throw new Error(e);
  }
});

//Delete category
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDBid(id);
  try {
    const deletedCat = await Category.findByIdAndDelete(id);
    res.json(deletedCat);
  } catch (e) {
    throw new Error(e);
  }
});

//Fetch category
const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDBid(id);
  try {
    const category = await Category.findById(id);
    res.json(category);
  } catch (e) {
    throw new Error(e);
  }
});

//Fetch all categories
const getAllCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (e) {
    throw new Error(e);
  }
});

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
};

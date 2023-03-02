const express = require("express");
const {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
} = require("../controllers/blogCategoryController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAllCategories);
router.post("/", authMiddleware, isAdmin, createCategory);
router.get("/:id", getCategory);
router.put("/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);

module.exports = router;

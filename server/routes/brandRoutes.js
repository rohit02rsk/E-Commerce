const express = require("express");
const {
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
  getAllBrands,
} = require("../controllers/brandController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAllBrands);
router.post("/", authMiddleware, isAdmin, createBrand);
router.get("/:id", getBrand);
router.put("/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);

module.exports = router;

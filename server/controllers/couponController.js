const Coupon = require("../models/couponModel");
const asyncHandler = require("express-async-handler");
const validateMongoDBid = require("../utils/validateMongoDBid");

const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (e) {
    throw new Error(e);
  }
});

const getAllCoupons = asyncHandler(async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (e) {
    throw new Error(e);
  }
});

const getCoupon = asyncHandler(async (req, res) => {
  const { id } = req.body;
  validateMongoDBid(id);
  try {
    const coupon = await Coupon.findById(id);
    res.json(coupon);
  } catch (e) {
    throw new Error(e);
  }
});

const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDBid(id);
  try {
    const coupon = await Coupon.findByIdAndUpdate(id, req.body, { new: true });
    res.json(coupon);
  } catch (e) {
    throw new Error(e);
  }
});

const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDBid(id);
  try {
    const coupon = await Coupon.findByIdAndDelete(id);
    res.json(coupon);
  } catch (e) {
    throw new Error(e);
  }
});

module.exports = {
  createCoupon,
  getAllCoupons,
  getCoupon,
  updateCoupon,
  deleteCoupon,
};

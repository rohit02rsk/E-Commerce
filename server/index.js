const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();

const { notFound, errorHandler } = require("./middlewares/errorHandler");
const dbConnect = require("./config/dbConnect");

const app = express();
const PORT = process.env.PORT || 4000;

const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");
const blogRouter = require("./routes/blogRoutes");
const productCategoryRouter = require("./routes/productCategoryRoutes");
const blogCategoryRouter = require("./routes/blogCategoryRoutes");
const brandRouter = require("./routes/brandRoutes");
const couponRouter = require("./routes/couponRoutes");

//Connect to database
dbConnect();

//All the app.use() statements besides routers
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Auth routes
app.use("/api/user", authRouter);
//Product routes
app.use("/api/product", productRouter);
//Blog routes
app.use("/api/blog", blogRouter);
//Product category routes
app.use("/api/p-category", productCategoryRouter);
//Blog category routes
app.use("/api/b-category", blogCategoryRouter);
//Brand routes
app.use("/api/brand", brandRouter);
//Coupon routes
app.use("/api/coupon", couponRouter);

app.use(notFound);
app.use(errorHandler);

//Server is up and running
app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});

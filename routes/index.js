const router = require("express").Router();
const thoughtRoutes = require("./api/thoughtRoutes");
const userRoutes = require("./api/userRoutes");

router.use("/api/user", userRoutes);
router.use("/api/thoughts", thoughtRoutes);

module.exports = router;

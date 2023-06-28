const express = require("express");

const router = express.Router();

const UserControllers = require("./controllers/UserControllers");
const SmartphoneControllers = require("./controllers/SmartphoneControllers");
const ScreenControllers = require("./controllers/ScreenControllers");
const OSControllers = require("./controllers/OSControllers");

// ----------------------------------------- Users routes -------------------------------------------

router.get("/smartphone", SmartphoneControllers.browse);
router.get("/smartphone/:id", SmartphoneControllers.read);
router.post("/smartphone", SmartphoneControllers.add);
router.put("/smartphone/:id", SmartphoneControllers.edit);
router.get("/screen", ScreenControllers.browse);
router.get("/screen/:id", ScreenControllers.read);
router.post("/screen", ScreenControllers.add);
router.put("/screen/:id", ScreenControllers.edit);
router.get("/operatingsystem", OSControllers.browse);
router.get("/operatingsystem/:id", OSControllers.read);
router.post("/operatingsystem", OSControllers.add);
router.put("/operatingsystem/:id", OSControllers.edit);

// ----------------------------------------- Admin routes ------------------------------------------------

router.get("/user", UserControllers.browse);
router.get("/user/:id", UserControllers.read);
router.put("/user/:id", UserControllers.edit);
router.post("/user", UserControllers.add);
router.delete("/user/:id", UserControllers.destroy);
router.delete("/smartphone/:id", SmartphoneControllers.destroy);
router.delete("/screen/:id", ScreenControllers.destroy);
router.delete("/operatingsystem/:id", OSControllers.destroy);

module.exports = router;

const express = require("express");

const router = express.Router();

const UserControllers = require("./controllers/UserControllers");
const SmartphoneControllers = require("./controllers/SmartphoneControllers");
const ScreenControllers = require("./controllers/ScreenControllers");
const OSControllers = require("./controllers/OSControllers");
const WeightingControllers = require("./controllers/WeightingControllers");
const RamControllers = require("./controllers/RamControllers");
const StorageControllers = require("./controllers/StorageControllers");
const NetworkControllers = require("./controllers/NetworkControllers");
const BrandControllers = require("./controllers/BrandControllers");

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

router.get("/weighting", WeightingControllers.browse);
router.get("/weighting/:id", WeightingControllers.read);
router.put("/weighting/:id", WeightingControllers.edit);
router.post("/weighting", WeightingControllers.add);
router.delete("/weighting/:id", WeightingControllers.destroy);

router.get("/ram", RamControllers.browse);
router.get("/ram/:id", RamControllers.read);
router.put("/ram/:id", RamControllers.edit);
router.post("/ram", RamControllers.add);
router.delete("/ram/:id", RamControllers.destroy);

router.get("/storage", StorageControllers.browse);
router.get("/storage/id", StorageControllers.read);
router.put("/storage/:id", StorageControllers.edit);
router.post("/storage", StorageControllers.add);
router.delete("/storage/:id", StorageControllers.destroy);

router.get("/network", NetworkControllers.browse);
router.get("/network/id", NetworkControllers.read);
router.put("/network/:id", NetworkControllers.edit);
router.post("/network", NetworkControllers.add);
router.delete("/network/:id", NetworkControllers.destroy);

router.get("/brand", BrandControllers.browse);
router.get("/brand/id", BrandControllers.read);
router.put("/brand/:id", BrandControllers.edit);
router.post("/brand", BrandControllers.add);
router.delete("/brand/:id", BrandControllers.destroy);

module.exports = router;

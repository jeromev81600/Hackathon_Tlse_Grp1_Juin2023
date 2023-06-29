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
const ModelControllers = require("./controllers/ModelControllers");

// ----------------------------------------- Users routes -------------------------------------------

router.get("/smartphone", SmartphoneControllers.browse);
router.get("/smartphone/:id", SmartphoneControllers.read);
router.get("/screen", ScreenControllers.browse);
router.get("/screen/:id", ScreenControllers.read);
router.get("/operatingsystem", OSControllers.browse);
router.get("/operatingsystem/:id", OSControllers.read);
router.get("/user", UserControllers.browse);
router.get("/user/:id", UserControllers.read);
router.get("/weighting", WeightingControllers.browse);
router.get("/weighting/:id", WeightingControllers.read);
router.get("/storage", StorageControllers.browse);
router.get("/storage/id", StorageControllers.read);
router.get("/ram", RamControllers.browse);
router.get("/ram/:id", RamControllers.read);
router.get("/network", NetworkControllers.browse);
router.get("/network/id", NetworkControllers.read);
router.get("/brand", BrandControllers.browse);
router.get("/brand/id", BrandControllers.read);
router.get("/model", ModelControllers.browse);
router.get("/model/:id", ModelControllers.read);

router.post("/smartphone", SmartphoneControllers.add);

router.put("/smartphone/:id", SmartphoneControllers.edit);

// ----------------------------------------- Admin routes ------------------------------------------------

router.post("/weighting", WeightingControllers.add);
router.post("/user", UserControllers.add);

router.delete("/weighting/:id", WeightingControllers.destroy);
router.delete("/user/:id", UserControllers.destroy);
router.delete("/smartphone/:id", SmartphoneControllers.destroy);
router.delete("/screen/:id", ScreenControllers.destroy);
router.delete("/operatingsystem/:id", OSControllers.destroy);
router.delete("/ram/:id", RamControllers.destroy);

router.put("/user/:id", UserControllers.edit);
router.put("/weighting/:id", WeightingControllers.edit);
router.put("/ram/:id", RamControllers.edit);
router.put("/storage/:id", StorageControllers.edit);
router.put("/network/:id", NetworkControllers.edit);
router.put("/brand/:id", BrandControllers.edit);
router.put("/screen/:id", ScreenControllers.edit);
router.put("/operatingsystem/:id", OSControllers.edit);
router.put("/model/:id", ModelControllers.edit);

router.post("/ram", RamControllers.add);
router.post("/storage", StorageControllers.add);
router.post("/network", NetworkControllers.add);
router.post("/brand", BrandControllers.add);
router.post("/model", ModelControllers.add);
router.post("/screen", ScreenControllers.add);
router.post("/operatingsystem", OSControllers.add);

router.delete("/network/:id", NetworkControllers.destroy);
router.delete("/storage/:id", StorageControllers.destroy);
router.delete("/brand/:id", BrandControllers.destroy);
router.delete("/model/:id", ModelControllers.destroy);

module.exports = router;

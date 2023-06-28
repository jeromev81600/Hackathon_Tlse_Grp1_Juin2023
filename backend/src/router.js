const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const UserControllers = require("./controllers/UserControllers");
const WeightingControllers = require("./controllers/WeightingControllers");
const RamControllers = require("./controllers/RamControllers");
const StorageControllers = require("./controllers/StorageControllers");
const NetworkControllers = require("./controllers/NetworkControllers");
const BrandControllers = require("./controllers/BrandControllers");
const ModelControllers = require("./controllers/ModelControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// ----------------------------------------- Users routes -------------------------------------------

// ----------------------------------------- Admin routes ------------------------------------------------

router.get("/user", UserControllers.browse);
router.get("/user/:id", UserControllers.read);
router.put("/user/:id", UserControllers.edit);
router.post("/user", UserControllers.add);
router.delete("/user/:id", UserControllers.destroy);

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

router.get("/model", ModelControllers.browse);
router.get("/model/:id", ModelControllers.read);
router.put("/model/:id", ModelControllers.edit);
router.post("/model", ModelControllers.add);
router.delete("/model/:id", ModelControllers.destroy);

module.exports = router;

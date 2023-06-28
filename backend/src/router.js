const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const UserControllers = require("./controllers/UserControllers");

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

module.exports = router;

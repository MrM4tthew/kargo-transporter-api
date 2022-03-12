const express = require("express");
const router = express.Router();
const Truck = require("../../models/Truck");
const TruckType = require("../../models/TruckType");

// Gets All Members
router.get("/", (req, res) => {
  // Truck.findAll({
  //   include: [
  //     {
  //       model: TruckType,
  //       // attributes: ["name"],
  //     },
  //   ],
  // }).then((truck) => res.json(truck));
  Truck.findAll().then((truck) => res.json(truck));
});

// Get Single Member
router.get("/:id", (req, res) => {
  Truck.findOne({ where: { id: req.params.id } }).then((truck) =>
    res.json(truck)
  );
});

// Create Member
router.post("/", (req, res) => {
  const newData = {
    ...req.body,
  };

  if (
    !newData.license_number ||
    !newData.production_year
    // ||
    // !newData.TruckTypeId ||
    // !newData.LicenseTypeId
  ) {
    res.status(400).json({ msg: "Some data is missing" });
  } else {
    Truck.create(newData).then((submitedData) => res.json(submitedData));
  }
  Truck.findAll().then((truck) => res.json(truck));
});

// Update Member
router.put("/:id", (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    members.forEach((member, i) => {
      if (idFilter(req)(member)) {
        const updMember = { ...member, ...req.body };
        members[i] = updMember;
        res.json({ msg: "Member updated", updMember });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Delete Member
router.delete("/:id", (req, res) => {
  Truck.destroy({ where: { id: req.params.id } });
  res.status(200).json({ msg: "deleted" });
});

module.exports = router;

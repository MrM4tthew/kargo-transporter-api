const express = require("express");
const router = express.Router();
const Truck = require("../../models/Truck");

// Gets All Members
router.get("/", (req, res) => {
  Truck.findAll().then((truck) => res.json(truck));
});

// Get Single Member
router.get("/:id", (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    res.json(members.filter(idFilter(req)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Create Member
router.post("/", (req, res) => {
  const newData = {
    ...req.body,
  };

  if (
    !newData.license_number ||
    !newData.production_year ||
    !newData.TruckTypeId ||
    !newData.LicenseTypeId
  ) {
    res.status(400).json({ msg: "Some data is missing" });
  } else {
    Truck.create({ name: req.body.name }).then((submitedData) =>
      res.json(submitedData)
    );
  }
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
  const found = members.some(idFilter(req));

  if (found) {
    res.json({
      msg: "Member deleted",
      members: members.filter((member) => !idFilter(req)(member)),
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
